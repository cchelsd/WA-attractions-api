/**
 * Defines example JSON data which is appended to the various endpoint sections in index.html
 */

const exampleJSONData = {
    getAll: `
            [
                {
                    "id": 1,
                    "name": "Olympic National Park",
                    "category": "Natural",
                    "subcategory": "Landscapes",
                    "description": "Olympic National Park is on Washington's Olympic Peninsula 
                        in the Pacific Northwest. The park sprawls across several different ecosystems, 
                        from the dramatic peaks of the Olympic Mountains to old-growth forests. The 
                        summit of glacier-clad Mt. Olympus is popular with climbers, and hiking and 
                        backpacking trails cut through the park's rainforests and along its Pacific 
                        coastline.",
                    "location": "Port Angeles",
                    "latitude": 47.96935,
                    "longitude": -123.49856
                },
                {
                    "id": 2,
                    "name": "Mount Rainier National Park",
                    "category": "Natural",
                    "subcategory": "Landscapes",
                    "description": "Nestled in the Cascade Range, Mount Rainier National Park 
                        is home to the iconic Mount Rainier, an active stratovolcano and the 
                        highest peak in the state. Visitors can explore subalpine meadows, dense 
                        forests, and glaciers, as well as enjoy activities like hiking, wildlife 
                        watching, and snow sports depending on the season.",
                    "location": "Ashford",
                    "latitude": 46.85,
                    "longitude": -121.75
                },           
                
                . . . (abbreviated)
            ]`,
    byCity: `
            [
                {
                    "id": 22,
                    "name": "Chihuly Garden and Glass",
                    "category": "Cultural and Historical",
                    "subcategory": "Museums",
                    "description": "Chihuly Garden and Glass is an exhibit in the Seattle Center directly 
                        next to the Space Needle, showcasing the studio glass of Dale Chihuly.",
                    "location": "Seattle",
                    "latitude": 47.62062,
                    "longitude": -122.35007
                },

                . . . (abbreviated)
            ]`,
    byCategory: `
            [
                {
                    "id": 1,
                    "name": "Olympic National Park",
                    "category": "Natural",
                    "subcategory": "Landscapes",
                    "description": "Olympic National Park is on Washington's Olympic Peninsula in the Pacific 
                        Northwest. The park sprawls across several different ecosystems, from the dramatic 
                        peaks of the Olympic Mountains to old-growth forests. The summit of glacier-clad 
                        Mt. Olympus is popular with climbers, and hiking and backpacking trails cut through the 
                        park's rainforests and along its Pacific coastline.",
                    "location": "Port Angeles",
                    "latitude": 47.96935,
                    "longitude": -123.49856
                },

                . . . (abbreviated)
            ]`,
    bySubcategory: `
            [
                {
                    "id": 27,
                    "name": "Fort Vancouver National Historic Site",
                    "category": "Cultural and Historical",
                    "subcategory": "Historical Sites",
                    "description": "This historic site preserves the legacy of Fort Vancouver, a 19th-century fur 
                        trading post. Visitors can explore reconstructed buildings, engage in living history 
                        demonstrations, and learn about the region's colonial history.",
                    "location": "Vancouver",
                    "latitude": 45.625395,
                    "longitude": -122.658153
                },

                . . . (abbreviated)
            ]`,
    mustVisit: `
            [
                {
                    "id": 1,
                    "name": "Olympic National Park",
                    "category": "Natural",
                    "subcategory": "Landscapes",
                    "description": "Olympic National Park is on Washington's Olympic Peninsula in the Pacific 
                        Northwest. The park sprawls across several different ecosystems, from the dramatic 
                        peaks of the Olympic Mountains to old-growth forests. The summit of glacier-clad 
                        Mt. Olympus is popular with climbers, and hiking and backpacking trails cut through the 
                        park's rainforests and along its Pacific coastline.",
                    "location": "Port Angeles",
                    "latitude": 47.96935,
                    "longitude": -123.49856
                },

                . . . (abbreviated)
            ]`,
    mustVisitCategory: `
            [
                {
                "id": 46,
                "name": "Space Needle",
                "category": "Urban",
                "subcategory": "Towers",
                "description": "The Space Needle is an observation tower in Seattle. The Space 
                    Needle is an iconic landmark in Seattle, known for its futuristic design and 
                    panoramic views of the city and surrounding landscapes. ",
                "location": "Seattle",
                "latitude": 47.6204,
                "longitude": -122.3491
                },
                {
                "id": 49,
                "name": "Pike Place Market",
                "category": "Urban",
                "subcategory": "Shopping",
                "description": "Pike Place Market is a historic public market in Seattle, known 
                    for its vibrant atmosphere, fresh produce, local crafts, and the iconic 
                    fish-throwing tradition. It's a must-visit destination offering a taste of the 
                    city's culture and culinary delights.",
                "location": "Seattle",
                "latitude": 47.609444,
                "longitude": -122.341667
                },
                
                . . . (abbreviated)
            ]`,
    hiddenGems: `
            [
                {
                    "id": 4,
                    "name": "Steptoe Butte State Park",
                    "category": "Natural",
                    "subcategory": "Parks and Reserves",
                    "description": "Rising above the Palouse Hills, Steptoe Butte State Park offers panoramic 
                        views of the surrounding agricultural landscapes. This iconic butte is a popular spot for 
                        photography, especially during sunrise and sunset, when the rolling hills are bathed in 
                        warm, golden light.",
                    "location": "Colfax",
                    "latitude": 47.0325,
                    "longitude": -117.298611
                },

                . . . (abbreviated)
            ]`,
    hiddenGemsCategory: `
            [
                {
                    "id": 34,
                    "name": "The Enchantments",
                    "category": "Adventure",
                    "subcategory": "Hiking and Trekking",
                    "description": " A stunning alpine wilderness area in the Cascade Range, known for 
                        its pristine lakes, jagged peaks, and vibrant larch trees in the fall. 
                        Accessible through a permit system, it's a favorite destination for hikers and 
                        backpackers seeking a backcountry experience.",
                    "location": "Leavenworth",
                    "latitude": 47.481111,
                    "longitude": -120.803889
                },
                {
                    "id": 37,
                    "name": "Lena Lake Trail",
                    "category": "Adventure",
                    "subcategory": "Hiking and Trekking",
                    "description": "The Lena Lake Trail, situated in Olympic National Forest, leads to 
                        the picturesque Lena Lake. Hikers can enjoy a forested trail along the Hamma 
                        Hamma River, eventually reaching the serene lake surrounded by mountains.",
                    "location": "Lilliwaup",
                    "latitude": 47.5997,
                    "longitude": -123.1512
                },

                . . . (abbreviated)
            ]`,
    similar: `
            [
                {
                    "id": 48,
                    "name": "Columbia Center",
                    "category": "Urban",
                    "subcategory": "Towers",
                    "description": "The tallest skyscraper in Seattle. The observation deck provides spectacular 
                        views of Seattle, Puget Sound, and the Cascade and Olympic mountain ranges, making it a 
                        popular destination for locals and tourists alike.",
                    "location": "Seattle",
                    "latitude": 47.60453,
                    "longitude": -122.33069
                },

                . . . (abbreviated)
            ]`,
    nearby: `
            [
                {
                    "id": 51,
                    "name": "Wild Waves Theme and Water Park",
                    "category": "Urban",
                    "subcategory": "Amusement Parks",
                    "description": "A combination of thrilling amusement park rides and refreshing water 
                        attractions. It's a family-friendly destination, providing fun for visitors of all ages.",
                    "location": "Federal Way",
                    "latitude": 47.2725,
                    "longitude": -122.3115
                }
            ]`,
    random: `
            [
                {
                    "id": 34,
                    "name": "The Enchantments",
                    "category": "Adventure",
                    "subcategory": "Hiking and Trekking",
                    "description": " A stunning alpine wilderness area in the Cascade Range, known for its 
                        pristine lakes, jagged peaks, and vibrant larch trees in the fall. Accessible through a 
                        permit system, it's a favorite destination for hikers and backpackers seeking a 
                        backcountry experience.",
                    "location": "Leavenworth",
                    "latitude": 47.481111,
                    "longitude": -120.803889
                }
            ]`,
    getBasic: `
            [
                {
                    "id": 7,
                    "name": "Mount St. Helens National Volcanic Monument",
                    "category": "Natural",
                    "subcategory": "Parks and Reserves",
                    "description": "Mount St. Helens National Volcanic Monument is a U.S. National Monument 
                        that includes the area around Mount St. Helens in Washington. Visitors can explore 
                        the  blast zone, witness the recovering landscape, and learn about the geological 
                        processes that shaped the area through interpretive centers and hiking trails.",
                    "location": "Castle Rock",
                    "latitude": 46.233166,
                    "longitude": -122.184541
                }
            ]`,
    putBasicBody: `
            {
                {
                    "category": "Natural",
                    "subcategory": "Landscapes",
                    "description": "Olympic National Park is on Washington's Olympic Peninsula in the 
                        Pacific Northwest. The park sprawls across several different ecosystems from 
                        the dramatic peaks of the Olympic Mountains to old-growth forests. The summit 
                        of glacier-clad Mt. Olympus is popular with climbers, and hiking and 
                        backpacking trails cut through the park's rainforests and along its Pacific 
                        coastline.",
                    "location": "Port Angeles",
                    "latitude": 47.96935,
                    "longitude": -123.49856,
                    "must-visit": 1,
                    "hidden-gem": 0
                }
            }`,
    putBasicResponse: `
            // Success 200
            {
                "Success": "Successful: Record was updated!."
            }

            // Error 400
            {
                "Error": "Failed: Record was not updated."
            }`,
    deleteBasic: `
            // Success 200
            {
                "Success": "Successful: Record was deleted!"
            }

            // Error 400
            {
                "Error": "Failed: Record was not deleted."
            }`,
    getDetails: `
            [
                {
                    "id": 7,
                    "name": "Mount St. Helens National Volcanic Monument",
                    "description": "Enshrined in the dramatic history of volcanic activity, 
                        Mount St. Helens National Volcanic Monument is a captivating testament 
                        to the power of nature's forces. The monument, established after the 
                        1980 eruption, allows visitors to witness the profound changes to the 
                        landscape and the gradual process of recovery. Explore the Johnston 
                        Ridge Observatory for panoramic views, engage in educational programs 
                        detailing the eruption's impact, and embark on guided hikes to delve 
                        into the geological wonders of this living laboratory.",
                    "address": "3029 Spirit Lake Hwy, Castle Rock, WA 98611",
                    "contact_info": "Phone: (360) 449-7800",
                    "hours": "8 AM-4 PM on weekdays, closed on weekends",
                    "admission": "Passes are $8 per adult (youth 15 and younger are free)"
                }
            ]`,
    putDetailsBody: `
            {
                "description": "Enshrined in the dramatic history of volcanic activity, 
                    Mount St. Helens National Volcanic Monument is a captivating testament 
                    to the power of nature's forces. The monument, established after the 
                    1980 eruption, allows visitors to witness the profound changes to the 
                    landscape and the gradual process of recovery. Explore the Johnston 
                    Ridge Observatory for panoramic views, engage in educational programs 
                    detailing the eruption's impact, and embark on guided hikes to delve 
                    into the geological wonders of this living laboratory.",
                "address": "3029 Spirit Lake Hwy, Castle Rock, WA 98611",
                "contact_info": "Phone: (360) 449-7800",
                "hours": "8 AM-4 PM on weekdays, closed on weekends",
                "admission": "Passes are $8 per adult (youth 15 and younger are free)"
            }`,
    putDetailsResponse: `
            // Success 200
            {
                "Success": "Successful: Record was updated!"
            }
            
            // Error 400
            {
                "Error": "Failed: Record was not updated."
            }`,
    postDetailsBody: `
            {
                "name": "Olympic National Park",
                "description": "Encompassing a staggering diversity of ecosystems, Olympic 
                    National Park is a natural wonderland that showcases the breadth of 
                    nature's beauty. From the lush Hoh Rainforest to the alpine peaks of the 
                    Olympic Mountains, the park offers an immersive experience for outdoor 
                    enthusiasts. Explore the pristine coastline, venture into old-growth 
                    forests, and embark on challenging hikes. Notable events include ranger-led 
                    programs, providing insights into the park's rich biodiversity, Native 
                    American history, and the ever-changing landscapes.",
                "address": "3002 Mt Angeles Rd, Port Angeles, WA 98362",
                "contact_info": "Phone: (360) 565-3130",
                "hours": "24 hours",
                "admission": "Entrance Pass ($15.00-$30.00) required for all visitors",
                "images": [
                            {
                            "url": "https://olympicpeninsula.org/wp-content/uploads/2018/08/falls.jpg", 
                            "src": "Olympic Peninsula"
                            }
                        ],
                "videos": [ 
                            {
                            "title": "Olympic National Park | America's National Parks",
                            "url": "https://www.youtube.com/embed/NEMQdNYbBds?si=oZiC44u8nCzeD5WT"
                            }
                        ]
            }`,
    postDetailsResponse: `
            // Success 200
            {
                "Success": "Successful: Record was added!."
            }
            
            // Error 400 (3 possibilities)
            {
                "Error": "Failed to check if record exists."
            }

            {
                "Error": "Record already exists with this name."
            }

            {
                "Error": "Failed: Record was not added."
            }`,
    nearbyDetails: `
            [
                {
                    "id": 32,
                    "name": "Marmes Rockshelter",
                    "description": "Situated along the Palouse River, the Marmes Rockshelter is an 
                        archaeological treasure trove, offering insights into the prehistoric cultures 
                        of the region. The site contains evidence of ancient human habitation, including 
                        tools and artifacts. While not physically accessible to the public to preserve 
                        its integrity, interpretive centers and educational programs provide a window 
                        into the fascinating history unearthed at Marmes Rockshelter.",
                    "address": "Marmes Rockshelter, WA 99143",
                    "contact_info": "   ",
                    "hours": "24 hours",
                    "admission": "Free"
                }
            ]`,
    similarDetails: `
            [
                {
                    "id": 17,
                    "name": "Snoqualmie Falls",
                    "description": "Carving its way through the Snoqualmie River, Snoqualmie Falls 
                        is a majestic natural wonder surrounded by lush landscapes. The falls 
                        themselves provide a captivating display without requiring architectural 
                        embellishments. Enjoy viewpoints, scenic overlooks, and the soothing 
                        ambiance of the cascading water. Periodic cultural events and festivals 
                        celebrate the falls' significance in the region's history.",
                    "address": "6501 Railroad Ave SE Snoqualmie, Washington, 98024",
                    "contact_info": "Phone: (425) 326-2563",
                    "hours": "From sun up to sun down",
                    "admission": "Free"
                },
                {
                    "id": 18,
                    "name": "Palouse Falls State Park",
                    "description": "Tucked away in the heart of the Palouse region, Palouse Falls 
                        State Park is a testament to natural beauty with its cascading waterfalls. 
                        Architectural features take a back seat to the dramatic landscape, offering 
                        breathtaking viewpoints and hiking trails. Explore the rugged terrain, 
                        witness the falls' power, and partake in stargazing events, highlighting 
                        the park's nocturnal charm.",
                    "address": "Palouse Falls Rd, LaCrosse, WA 99143",
                    "contact_info": "Phone: (509) 646-9218",
                    "hours": "Summer: 6:30 a.m. - Dusk
                            Winter: 8 a.m. - Dusk",
                    "admission": "Entrance Fees: Varies ($10+)"
                },

                ... (abbreviated)
            ]`,
    getImages: `
            {
                "images": [
                    {
                        "url": "https://d3qvqlc701gzhm.cloudfront.net/full/ef1f75819b0a72d8372b68d40c1500bbade0898d938a957da6b827afdc04e900.jpg",
                        "src": "CityPass"
                    },
                    {
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSxbwmp4LkubIs0vnzny4tl8zirpw-qXMZCPYh2whjn6vmJMH0G4M9tJuUDx3W7oEsEM&usqp=CAU",
                        "src": "MoPOP"
                    },
                    {
                        "url": "https://www.biartmuseum.org/wp-content/uploads/2018/11/Visit-Exterior-1920x875.jpg",
                        "src": "Bainbridge Island Museum of Art"
                    },
                    {
                        "url": "https://cdnassets.hw.net/a3/d3/1668ea954167a8ff2ae0c1a7e7f2/d76b0fa08ce54f32829fa4290ccd4cf8.jpg",
                        "src": "Architect Magazine"
                    },
                    {
                        "url": "https://coatesdesign.com/wp-content/uploads/OurWork_Civic_BIMA_6-1280x820.jpg",
                        "src": "Coates Design Architects"
                    },
                    {
                        "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/493000/493017-bainbridge-island-museum-of-art.jpg",
                        "src": "Expedia"
                    }
                ]
            }`,
    putImagesBody: `
            {
                "images": [
                    {
                        "url": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/bellevue/210-3-0744_jpeg-daaa849c5056a36_daab32cc-5056-a36a-0bf7b70a116f6950.jpg",
                        "src": "Visit Bellevue Washington"
                    }
                ]
            }`,
    putImagesResponse: `
            // Success 200
            {
                "Success": images updated successfully."
            }
            
            // Error 400 (2 possibilities)
            {
                "Error": "Error in the SQL statement. Please check."
            }

            {
                "Error": "images were not updated."
            }
                    
            // Error 405
            {
                "Error": "images do not exist. Please use POST instead of PUT."
            }`,
    postImagesBody: `
            {
                "images": [
                    {
                        "url": "https://www.oregonhikers.org/w/images/thumb/6/61/Inside_The_Tube%2C_Guler_Ice_Cave.jpg/
                            400px-Inside_The_Tube%2C_Guler_Ice_Cave.jpg",
                        "src": "Oregon Hikers"
                    },
                    {
                        "url": "https://hawkinwinter.com//wp-content/uploads/2012/06/trout-lake-caves-17.jpg",
                        "src": "Hawk in Winter"
                    },
                    {
                        "url": "https://atlas-assets.roadtrippers.com/uploads/place_image/image/56214822/-strip_-quality_
                            60_-interlace_Plane_-resize_640x360_U__-gravity_center_-extent_640x360/place_image-image-e90ab
                            506-8e61-465a-bf3a-e8b6e19ed184.jpg",
                        "src": "Roadtrippers Map"
                    }
                ]
            }`,
    postImagesResponse: `
            // Success 200
            {
                "Success": images added successfully."
            }
            
            // Error 400 (2 possibilities)
            {
                "Error": "Error in the SQL statement. Please check."
            }

            {
                "Error": "images were not added."
            }
                 
            // Error 405
            {
                "Error": "images already exist. Please use PUT instead of POST."
            }`,
    getVideos: `
            {
                "videos": [
                    {
                        "title": "Second Beach, Olympic National Park, WA",
                        "url": "https://www.youtube.com/embed/3191cTKUKg0?si=ajZhEW07tPCBDUnD"
                    },
                    {
                        "title": "Second Beach, Olympic National Park, La Push - Washington State",
                        "url": "https://www.youtube.com/embed/h9VvCEtttgQ?si=ODFdfBmOvQMy_rsS"
                    },
                    {
                        "title": "backpacking vlog in olympic national park (second beach) | summer weekend diaries",
                        "url": "https://www.youtube.com/embed/bwcT2gFy6MY?si=iZqyz_oSEfwvIgTN"
                    }
                ]
            }`,
    putVideosBody: `
            {
                "videos": [
                    {
                        "title": "Table Mountain Trail | Mt Baker-Snoqualmie National Forest | Washington",
                        "url": "https://www.youtube.com/embed/FTH4JsLY0zE?si=BXRffeFzWjlxHeFb"
                    },
                    {
                        "title": "Experience ARTIST POINT PICTURE LAKE and BAGLEY LAKES | Mt Baker Snoqualmie",
                        "url": "https://www.youtube.com/embed/BsU4MKQhsik?si=MVy6ITRh_LKuz6rd"
                    }
                ]
            }`,
    putVideosResponse: `
            // Success 200
            {
                "Success": videos updated successfully."
            }
            
            // Error 400 (2 possibilities)
            {
                "Error": "Error in the SQL statement. Please check."
            }

            {
                "Error": "videos were not updated."
            }
                    
            // Error 405
            {
                "Error": "videos do not exist. Please use POST instead of PUT."
            }`,
    postVideosBody: `
            {
                "videos": [
                    {
                        "title": "Ruby Beach Washington State 4K",
                        "url": "https://www.youtube.com/embed/25vH0lQR9dQ?si=Y0ylHnFNxNSo6bZp"
                    },
                    {
                        "title": "Hiking Ruby Beach (Olympic National Park)",
                        "url": "https://www.youtube.com/embed/FwGn-lUAsnM?si=NF6rRXClIbyeUz0d"
                    },
                    {
                        "title": "Possibly the Best Beach in Washington | Ruby Beach in Olympic National Park",
                        "url": "https://www.youtube.com/embed/NmaIx7ZsCU4?si=TMYRWj124xY9AC8q"
                    }
                ]
            }`,
    postVideosResponse: `
            // Success 200
            {
                "Success": videos added successfully."
            }
            
            // Error 400 (2 possibilities)
            {
                "Error": "Error in the SQL statement. Please check."
            }

            {
                "Error": "videos were not added."
            }
                    
            // Error 405
            {
                "Error": "videos already exist. Please use PUT instead of POST."
            }`,
};

$(document).ready(function() {
    $('#getAll .response').text(exampleJSONData.getAll);
    $('#byCityContent .response').text(exampleJSONData.byCity);
    $('#byCategoryContent .response').text(exampleJSONData.byCategory);
    $('#bySubcategoryContent .response').text(exampleJSONData.bySubcategory);
    $('#mustVisitContent .response').text(exampleJSONData.mustVisit);
    $('#mustVisitCategoryContent .response').text(exampleJSONData.mustVisitCategory);
    $('#hiddenGemsContent .response').text(exampleJSONData.hiddenGems);
    $('#hiddenGemsCategoryContent .response').text(exampleJSONData.hiddenGemsCategory);
    $('#similarContent .response').text(exampleJSONData.similar);
    $('#nearbyContent .response').text(exampleJSONData.nearby);
    $('#randomContent .response').text(exampleJSONData.random);
    $('#getBasic .response').text(exampleJSONData.getBasic);
    $('#putBasic #bodyCode .response').text(exampleJSONData.putBasicBody);
    $('#putBasic #succOrErrCode .response').text(exampleJSONData.putBasicResponse);
    $('#deleteBasic .response').text(exampleJSONData.deleteBasic);
    $('#getDetails .response').text(exampleJSONData.getDetails);
    $('#putDetails #bodyCode .response').text(exampleJSONData.putDetailsBody);
    $('#putDetails #succOrErrCode .response').text(exampleJSONData.putDetailsResponse);
    $('#postDetails #bodyCode .response').text(exampleJSONData.postDetailsBody);
    $('#postDetails #succOrErrCode .response').text(exampleJSONData.postDetailsResponse);
    $('#nearbyDetailedContent .response').text(exampleJSONData.nearbyDetails);
    $('#similarDetailedContent .response').text(exampleJSONData.similarDetails);
    $('#getImages .response').text(exampleJSONData.getImages);
    $('#putImages #bodyCode .response').text(exampleJSONData.putImagesBody);
    $('#putImages #succOrErrCode .response').text(exampleJSONData.putImagesResponse);
    $('#postImages #bodyCode .response').text(exampleJSONData.postImagesBody);
    $('#postImages #succOrErrCode .response').text(exampleJSONData.postImagesResponse);
    $('#getVideos .response').text(exampleJSONData.getVideos);
    $('#putVideos #bodyCode .response').text(exampleJSONData.putVideosBody);
    $('#putVideos #succOrErrCode .response').text(exampleJSONData.putVideosResponse);
    $('#postVideos #bodyCode .response').text(exampleJSONData.postVideosBody);
    $('#postVideos #succOrErrCode .response').text(exampleJSONData.postVideosResponse);
});