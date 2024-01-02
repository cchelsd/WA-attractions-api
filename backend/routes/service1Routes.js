// ---------------------------------------------------------------------
// TCSS 460: Autumn 2023
// Web Service 1 - Attractions Explorer: Attractions Information
// Author: Chelsea Dacones
// ---------------------------------------------------------------------

// ----------------------------------------------
// retrieve necessary files
const express = require("express");

const router = express.Router();

// retrieve the MySQL DB Configuration Module
const dbConnection = require("../config");

// ---------------------------------------------------------
// Provides a collection of attractions in Washington state 
// with basic info such as name, description, location, etc.
// root URI: http://localhost:port/attractions
router.get('/', (request, response) => {
    const sqlQuery = "SELECT * FROM attractions;";
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    response.setHeader('X-All-Attractions', sqlQuery); // send a custom header attribute
    return response.status(200).json(filterFields(result));
    }); 
});

// ---------------------------------------------- 
// Allows to add an attraction to the collection.
// root URI: http://localhost:port/attractions
router.post('/', (request, response) => {
    const name = request.body.name;
    let sqlQuery = 'SELECT * FROM attractions WHERE name = ?';

    // Check if the record with the same name already exists
    dbConnection.query(sqlQuery, [name], (checkErr, checkResult) => {
        if (checkErr) {
            return response.status(400).json({ Error: "Failed to check if record exists." });
        }
        if (checkResult.length > 0) {
            return response.status(400).json({ Error: "Record already exists with this name." });
        } else {
            // Record doesn't exist, proceed with insertion
            const { name, category, subcategory, description, location, latitude, longitude, must_visit, hidden_gem } = request.body;
            sqlQuery = 'INSERT INTO attractions (name, category, subcategory, description, location, latitude, longitude, must_visit, hidden_gem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [name, category, subcategory, description, location, latitude, longitude, must_visit, hidden_gem];

            dbConnection.query(sqlQuery, values, (err, result) => {
                if (err) {
                    return response.status(400).json({ Error: "Failed: Record was not added." });
                }
                return response.status(200).json({ id: result.insertId, Success: "Successful: Record was added!." });
            });
        }
    });
});

// ------------------------------------------------
// Provides a collection of attractions in the 
// specified city. 
// city URI: http://localhost:port/attractions/city
router.get('/city/:city', (request, response) => {
    const city = request.params.city.replace(/[-_%]/g, ' ');
    const sqlQuery = `SELECT * FROM attractions WHERE location = '${city}';`;
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    response.setHeader('X-City-Attractions', city); // send a custom header attribute 
    return response.status(200).json(filterFields(result));
    }); 
});

// -------------------------------------------------------------------
// Provides a collection of attractions of the specified category 
// (e.g. Natural, Adventure).
// category URI: http://localhost:port/attractions/category/{category}
router.get('/category/:category', (request, response) => {
    const category = request.params.category.replace(/[-_%]/g, ' ').toLowerCase();
    const sqlQuery = `SELECT * FROM attractions WHERE category = '${category}';`;
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('X-Attraction-Category', category); // send a custom header attribute 
        return response.status(200).json(filterFields(result));
    }); 
});

// ----------------------------------------------------------------------------
// Provides a collection of attractions of the specified subcategory 
// (e.g. Museums, Landscapes).
// subcategory URI: http://localhost:port/attractions/subcategory/{subcategory}
router.get('/subcategory/:subcategory', (request, response) => {
    const subcategory = request.params.subcategory.replace(/[-_%]/g, ' ').toLowerCase();
    const sqlQuery = `SELECT * FROM attractions WHERE subcategory = '${subcategory}';`;
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        response.setHeader('X-Attraction-Subcategory', subcategory); // send a custom header attribute 
        return response.status(200).json(filterFields(result));
    }); 
});

// ------------------------------------------------------------
// Provides a collection of must-visit attractions.
// highlights URI: http://localhost:port/attractions/highlights
router.get('/highlights', (request, response) => {
    const sqlQuery = "SELECT * FROM attractions WHERE must_visit = 1;";
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    response.setHeader('X-Highlight-Attractions', 'true'); // send a custom header attribute 
    return response.status(200).json(filterFields(result));
    }); 
});

// ---------------------------------------------------------------------------------
// Provides a collection of must-visit attractions of the specified category.
// highlights by category URI: http://localhost:port/attractions/highlights/category
router.get('/highlights/:category', (request, response) => {
    const category = request.params.category;
    const sqlQuery = `SELECT * FROM attractions WHERE must_visit = 1 AND category = '${category}';`;
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    response.setHeader('X-Highlight-Attractions-Category', category); // send a custom header attribute 
    return response.status(200).json(filterFields(result));
    }); 
});

// -------------------------------------------------------------
// Provides a collection of hidden-gem (i.e. underrated) 
// attractions.
// hidden gems URI: http://localhost:port/attractions/hiddenGems
router.get('/hiddenGems', (request, response) => {
    const sqlQuery = "SELECT * FROM attractions WHERE hidden_gem = 1;";
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    response.setHeader('X-Hidden-Gem-Attractions', 'true'); // send a custom header attribute 
    return response.status(200).json(filterFields(result));
    }); 
});

// ------------------------------------------------------------------------------------
// Provides a collection of hidden-gem (i.e. underrated) attractions of the specified 
// category.
// hidden gems by category URI: http://localhost:port/attractions/hiddenGems/{category}
router.get('/hiddenGems/:category', (request, response) => {
    const category = request.params.category;
    const sqlQuery = `SELECT * FROM attractions WHERE hidden_gem = 1 AND category = '${category}';`;
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        console.log(err);
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    response.setHeader('X-Hidden-Gem-Attractions-Category', category); // send a custom header attribute 
    return response.status(200).json(filterFields(result));
    }); 
});

// --------------------------------------------------------------
// Provides a collection of attractions similar to the specified 
// attraction (given by ID).
// URI: http://localhost:port/attractions/similar/{attraction_id}
router.get('/similar/:attraction_id', (request, response) => {
    const id = request.params.attraction_id;

    // Fetch similar attractions based on the attractionsSimilarity table
    let sqlQuery = `SELECT id_2 AS similar_attraction_id FROM attractionsSimilarity WHERE id_1 = ${id};`;

    dbConnection.query(sqlQuery, (err, result) => { 
        if (err) {
            return response.status(400).json({ Error: "Error in the SQL statement. Please check." });
        }

        const similarAttractionIDs = result.map(row => row.similar_attraction_id);

        if (similarAttractionIDs.length === 0) {
            return response.status(200).json({ Message: "No similar attractions found." });
        }

        sqlQuery = `SELECT * FROM attractions WHERE id IN (${similarAttractionIDs.join(',')});`;

        dbConnection.query(sqlQuery, (err, result) => {
            if (err) {
                return response.status(400).json({ Error: "Error in the SQL statement. Please check." });
            }
            const similarAttractionsData = filterFields(result);
            response.setHeader('X-Similar-Attractions', similarAttractionIDs);
            return response.status(200).json(similarAttractionsData);
        });
    }); 
});

// --------------------------------------------------------
// Had issue with this
// Provides a collection of attractions near the specified 
// location. Needs to be a location within Washington
// (e.g. Tacoma, Space Needle, 98003).
// URI: http://localhost:port/attractions/nearby/{location}
router.get('/nearby/:location', async (request, response) => {
    const location = request.params.location;
    try {
        const geoResponse = await fetch(`https://geocode.maps.co/search?q=${encodeURIComponent(location)}`);
        const data = await geoResponse.json();
        // Find the first object with "Washington" in the display name
        const washingtonLocation = data.find(item => item.display_name.includes("Washington"));
        if (!washingtonLocation) {
            return response.status(404).json({ Error: "Location must be within Washington" });
        }
        const sqlQuery = "SELECT * FROM attractions WHERE " + "ABS(latitude - ?) < 0.1 AND ABS(longitude - ?) < 0.1";    
        dbConnection.query(sqlQuery, [washingtonLocation.lat, washingtonLocation.lon], (err, result) => {
            if (err) {
                return response.status(400).json({Error: "Error in the SQL statement. Please check."});
            }
            response.setHeader('X-Nearby-Attractions', location);
            return response.status(200).json(filterFields(result));
        });
    } catch (error) {
        console.error("Error fetching coordinates:", error);
    } 
});

// ---------------------------------------------
// Generates a random attraction in Washington 
// State.
// URI: http://localhost:port/attractions/random
router.get('/random', (request, response) => {
    const sqlQuery = "SELECT * FROM attractions ORDER BY RAND() LIMIT 1;";
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    response.setHeader('X-Random-Attraction', 'true');
    return response.status(200).json(filterFields(result));
    }); 
});

// --------------------------------------------------------------------
// Modify the JSON object that results from a SQL query.
// Hides the 'must_visit' and 'hidden_gem' data.
function filterFields(data) {
    return data.map(({ must_visit, hidden_gem, ...rest }) => rest);
}

module.exports = router;
