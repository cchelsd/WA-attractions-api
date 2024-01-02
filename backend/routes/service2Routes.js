// --------------------------------------------------------------
// TCSS 460: Autumn 2023
// Web Service 2 - Attraction Insight: Attraction Details & Media
// Author: Chelsea Dacones
// --------------------------------------------------------------

// ----------------------------------------------
// retrieve necessary files
const express = require("express");

const router = express.Router();

// retrieve the MySQL DB Configuration Module
const dbConnection = require("../config");


//---------------------- ROOT ENDPOINTS ----------------------

// -----------------------------------------------------------
// Provides basic info (data from service 1) about a specified 
// attraction.
// root URI: http://localhost:port/attractions/{attraction_id}
router.get('/:attraction_id', (request, response) => {
    const id = request.params.attraction_id;

    // Construct SQL query to fetch details of the attraction by its ID
    const sqlQuery = `SELECT * FROM attractions WHERE id = ${id};`; 

    // Query the database to fetch the attraction details
    dbConnection.query(sqlQuery, (err, result) => {
    if (err) {
        return response.status(400).json({Error: "Error in the SQL statement. Please check."});
    }
    const modifiedResult = result.map(({ must_visit, hidden_gem, similar_attractions, ...rest }) => rest);
    response.setHeader('X-Specific-Attraction', id); // Set a custom header attribute
    return response.status(200).json(modifiedResult);
    }); 
});

// -----------------------------------------------------------
// Update basic info for the specified attraction.
// root URI: http://localhost:port/attractions/{attraction_id}
router.put('/:attraction_id', (request, response) => {
    const id = request.params.attraction_id;
    const { category, subcategory, description, location, latitude, longitude, 
        must_visit, hidden_gem } = request.body;

    const updateFields = {category, subcategory, description, location, latitude, longitude, must_visit, hidden_gem};
    const validFields = Object.entries(updateFields).filter(([key, value]) => value !== undefined).map(([key]) => `${key} = ?`).join(', ');
    const values = Object.values(updateFields).filter(value => value !== undefined);
    values.push(id);

    // Construct SQL query to update attraction details
    const sqlQuery = `UPDATE attractions SET ${validFields} WHERE id = ?`;

    // Execute the SQL query to update attraction details
    dbConnection.query(sqlQuery, values, (err, result) => {
        if (err) {
            return response.status(400).json({ Error: "Failed: Record was not updated." });
        }
        return response.status(200).json({ Success: "Successful: Record was updated!" });
    });   
});

// -----------------------------------------------------------
// (3) Delete a specific attraction based on its ID.
// root URI: http://localhost:port/attractions/{attraction_id}
router.delete('/:attraction_id', (request, response) => {
    const id = request.params.attraction_id;

    // Construct SQL query to delete the attraction by its ID
    let sqlQuery = "DELETE FROM attractions WHERE id = ? ; ";

    // Execute the SQL query to delete the attraction
    dbConnection.query(sqlQuery, id, (err, result) => {
        if (err) {
            return response.status(400).json({ Error: "Failed: Record was not deleted." });
        }
        return response.status(200).json({ Success: "Successful: Record was deleted!" });
    });
});

//------------------------- DETAILS ENDPOINTS ---------------------------

// ----------------------------------------------------------------------
// Provides comprehensive details about a specific attraction such as the 
// contact info, address, history and notable events. 
// details URI: http://localhost:port/attractions/{attraction_id}/details
router.get('/:attraction_id/details', (request, response) => {
    const id = request.params.attraction_id;
    const sqlQuery = `SELECT * FROM attractionDetails WHERE id = ${id};`;
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        const modifiedResult = modifyResult(result);
        response.setHeader('X-Attraction-Details', id); // send a custom header attribute 
        return response.status(200).json(modifiedResult);
    }); 
});

// ----------------------------------------------------------------------
// Update the details of a specific attraction.
// details URI: http://localhost:port/attractions/{attraction_id}/details
router.put('/:attraction_id/details', (request, response) => {
    const id = request.params.attraction_id;
    const { description, address, contact_info, hours, admission } = request.body;

    // Creates an object containing the fields to be updated
    const updateFields = {description, address, contact_info, hours, admission};

    // Filters out fields with undefined values and constructs the SQL update query
    const validFields = Object.entries(updateFields).filter(([key, value]) => value !== undefined).map(([key]) => `${key} = ?`).join(', ');

     // Extracts values for the fields to be updated
    const values = Object.values(updateFields).filter(value => value !== undefined);
    values.push(id);

    // Constructs the SQL query to update attraction details
    const sqlQuery = `UPDATE attractionDetails SET ${validFields} WHERE id = ?`;

    // Executes the SQL query to update the given attraction details in the database
    dbConnection.query(sqlQuery, values, (err, result) => {
        if (err) {
            return response.status(400).json({ Error: "Failed: Record was not updated." });
        }
        return response.status(200).json({ Success: "Successful: Record was updated!" });
    });
});

// ----------------------------------------------------------------------
// Allows to add an attraction to the collection of attraction details.
// details URI: http://localhost:port/attractions/{attraction_id}/details
router.post('/:attraction_id/details', (request, response) => {
    const name = request.body.name;
    let sqlQuery = 'SELECT * FROM attractionDetails WHERE name = ?';

    // Check if the record with the same name already exists
    dbConnection.query(sqlQuery, [name], (checkErr, checkResult) => {
        if (checkErr) {
            return response.status(400).json({ Error: "Failed to check if record exists." });
        }
        if (checkResult.length > 0) {
            return response.status(400).json({ Error: "Record already exists with this name." });
        } else {
            // Record doesn't exist, proceed with insertion
            const { name, description, address, contact_info, hours, admission, images, videos } = request.body;
            console.log(request.body.name);
            const imagesToInsert = images || ''; // if images are not provided, set default value to empty
            const videosToInsert = videos || ''; // if videos are not provided, set default value to empty
            sqlQuery = 'INSERT INTO attractionDetails (name, description, address, contact_info, hours, admission, images, videos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [name, description, address, contact_info, hours, admission, imagesToInsert, videosToInsert];

            dbConnection.query(sqlQuery, values, (err, result) => {
                if (err) {
                    return response.status(400).json({ Error: "Failed: Record was not added." });
                }
                return response.status(200).json({ id: result.insertId, Success: "Successful: Record was added!." });
            });
        }
    });
});

// ------------------------------------------------------------------------------------------------
// Provides a collection of details of attractions near the specified attraction.
// It fetches the latitude and longitude of the attraction and finds nearby attractions within a 
// certain radius.
// nearby attractions details URI: http://localhost:port/attractions/{attraction_id}/details/nearby
router.get('/:attraction_id/details/nearby', (request, response) => {
    const id = request.params.attraction_id;
    let sqlQuery = `SELECT * FROM attractions WHERE id = ${id}`;
    
    // Query the database to fetch the basic info, which includes lat and long 
    // info of the specified attraction
    dbConnection.query(sqlQuery, async (err, result) => {
        if (err) {
            return response.status(400).json({Error: "Error in the SQL statement. Please check."});
        }
        
        // Extract latitude and longitude of the attraction from the query result
        const lat = result[0].latitude;
        const long = result[0].longitude;

        // Construct SQL query to find nearby attractions within a certain radius
        let sqlQuery = `SELECT * FROM attractions WHERE ABS(latitude - ${lat}) < 0.1 AND ABS(longitude - ${long}) < 0.1;`;    
        
        // Query the database to find nearby attractions
        dbConnection.query(sqlQuery, (err, result) => {
            if (err) {
                return response.status(400).json({Error: "Error in the SQL statement. Please check."});
            }             
            
            // Extract IDs of nearby attractions from the query result
            const ids = result.map(item => item.id);

            // Construct SQL query to fetch the details of nearby attractions
            sqlQuery = "SELECT * FROM attractionDetails WHERE id IN (?) AND id != ?";

            // Query the database to fetch details of nearby attractions
            dbConnection.query(sqlQuery, [ids, id], (err, result) => {
                if (err) {
                    return response.status(400).json({Error: "Error in the SQL statement. Please check."});
                }
                const modifiedResult = modifyResult(result);
                response.setHeader('X-Nearby-Attractions-Details', ids);
                return response.status(200).json(modifiedResult);
            });
        });
    });
});

// --------------------------------------------------------------------------------------------------
// Provides a collection of details of attractions similar to the specified attraction.
// similar attractions details URI: http://localhost:port/attractions/{attraction_id}/details/similar
router.get('/:attraction_id/details/similar', async (request, response) => {
    const id = request.params.attraction_id;
    // Fetch similar attractions based on the attractionsSimilarity table
    let sqlQuery = `SELECT id_2 AS similar_attraction_id FROM attractionsSimilarity WHERE id_1 = ${id};`;

    dbConnection.query(sqlQuery, (err, result) => { 
        if (err) {
            return response.status(400).json({ Error: "Error in the SQL statement. Please check." });
        }

        // Extracts similar attraction IDs from the query result
        const similarAttractionIDs = result.map(row => row.similar_attraction_id);

        if (similarAttractionIDs.length === 0) {
            return response.status(200).json({ Message: "No similar attractions found." });
        }

        // Fetch details of similar attractions
        sqlQuery = `SELECT * FROM attractionDetails WHERE id IN (${similarAttractionIDs.join(',')});`;

        dbConnection.query(sqlQuery, (err, result) => {
            if (err) {
                return response.status(400).json({ Error: "Error in the SQL statement. Please check." });
            }
            const similarAttractionsData = modifyResult(result);
            response.setHeader('X-Similar-Attractions-Details', similarAttractionIDs.join(','));
            return response.status(200).json(similarAttractionsData);
        });
    });
});

//------------------------- MEDIA ENDPOINTS ---------------------------

// --------------------------------------------------------------------
// Provides a collection of photos for a specific attraction.
// images URI: http://localhost:port/attractions/{attraction_id}/images
router.get('/:attraction_id/images', (request, response) => {
    const id = request.params.attraction_id;
    const mediaType = 'images';
    getAttrationMedia(id, mediaType, response);
});

// --------------------------------------------------------------------
// Update/add to the already existing photos for a specific attraction.
// images URI: http://localhost:port/attractions/{attraction_id}/images
router.post('/:attraction_id/images', (request, response) => {
    const id = request.params.attraction_id;
    const mediaType = 'images';
    const mediaArray = request.body.images;
    updateAttractionMedia(id, mediaType, mediaArray, response, true);
});

// --------------------------------------------------------------------
// Add photos for a specific attraction.
// images URI: http://localhost:port/attractions/{attraction_id}/images
router.put('/:attraction_id/images', (request, response) => {
    const id = request.params.attraction_id;
    const mediaType = 'images';
    const newImagesArray = request.body.images;
    updateAttractionMedia(id, mediaType, newImagesArray, response, false)
});

// --------------------------------------------------------------------
// Provides a collection of videos for a specific attraction.
// videos URI: http://localhost:3000/attractions/{attraction_id}/videos
router.get('/:attraction_id/videos', (request, response) => {
    const id = request.params.attraction_id;
    const mediaType = 'videos';
    getAttrationMedia(id, mediaType, response);
});

// --------------------------------------------------------------------
// Update/add to the already existing videos for a specific attraction.
// videos URI: http://localhost:3000/attractions/{attraction_id}/videos
router.put('/:attraction_id/videos', (request, response) => {
    const id = request.params.attraction_id;
    const mediaType = 'videos';
    const newVideosArray = request.body.videos;
    updateAttractionMedia(id, mediaType, newVideosArray, response, false)
});

// --------------------------------------------------------------------
// Allows to add videos for a specific attraction.
// videos URI: http://localhost:3000/attractions/{attraction_id}/videos
router.post('/:attraction_id/videos', (request, response) => {
    const id = request.params.attraction_id;
    const mediaType = 'videos';
    const mediaArray = request.body.videos;
    updateAttractionMedia(id, mediaType, mediaArray, response, true);
});

// ------------------------------------------------------------
// Handles GET for videos and images endpoints.
function getAttrationMedia(attractionId, mediaType, response) {
    const columnToSelect = (mediaType == 'images') ? 'images' : 'videos'; 
    const customHeader = (mediaType == 'images') ? 'X-Attraction-Images' : 'X-Attraction-Videos';

    const sqlQuery = `SELECT ${columnToSelect} FROM attractionDetails WHERE id = ${attractionId};`;
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({ Error: 'Error in the SQL statement. Please check.' });
        }

        // Parses the SQL query result into a JSON array
        const jsonArray = JSON.parse(JSON.stringify(result));
        let modifiedResult = jsonArray[0];
        const mediaArray = JSON.parse(modifiedResult[columnToSelect]);
        modifiedResult[columnToSelect] = mediaArray;

        response.setHeader(customHeader, attractionId);
        return response.status(200).json(modifiedResult);
    });
}

// -------------------------------------------------------------------------------------------
// Handles PUT and POST for videos and images endpoints.
function updateAttractionMedia(attractionId, mediaType, mediaArray, response, isPostRequest) {
    const columnToSelect = (mediaType === 'images') ? 'images' : 'videos';

    let mediaString = JSON.stringify(mediaArray);

    // Checks if mediaArray is missing, need to specify the field in the body
    if (!mediaArray) {
        return response.status(400).json({ Error: `Missing '${mediaType}' field in the request body.` });
    }

    // Fetch existing media for the attraction
    let sqlQuery = `SELECT ${columnToSelect} FROM attractionDetails WHERE id = ${attractionId};`;
    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            return response.status(400).json({ Error: 'Error in the SQL statement. Please check.' });
        }

        // Parses the SQL query result into a JSON array
        const jsonArray = JSON.parse(JSON.stringify(result));
        let existingResult = jsonArray[0];

          // Checks conditions for adding or updating media
        if ((isPostRequest && existingResult[columnToSelect] !== '') || (!isPostRequest && existingResult[columnToSelect] === '')) {
            const action = isPostRequest ? 'add' : 'update';
            return response.status(405).json({ Error: `${mediaType} ${action === 'add' ? 'already' : 'do not'} exist. Please use ${action === 'add' ? 'PUT' : 'POST'} instead of ${action === 'add' ? 'POST' : 'PUT'}.` });
        }

         // Updates the mediaArray if it's an update request (PUT)
        if (!isPostRequest) {
            const existingMediaArray = JSON.parse(existingResult[columnToSelect]) || [];
            const updatedMediaArray = existingMediaArray.concat(mediaArray);
            mediaString = JSON.stringify(updatedMediaArray);
        }

        // Update/add media for the attraction
        sqlQuery = `UPDATE attractionDetails SET ${columnToSelect} = ? WHERE id = ?`;
        dbConnection.query(sqlQuery, [mediaString, attractionId], (err, result) => {
            if (err) {
                return response.status(400).json({ Error: `${mediaType} were not ${isPostRequest ? 'added' : 'updated'}.` });
            }
            return response.status(200).json({ Success: `${mediaType} ${isPostRequest ? 'added' : 'updated'} successfully.` });
        });
    });
}

// -----------------------------------------------------------------
// Modify the JSON object that results from a SQL query (non-media).
// Hides the 'images' and 'videos' data.
function modifyResult(data) {
    return data.map(({ images, videos, ...rest }) => rest);
}

module.exports = router;

