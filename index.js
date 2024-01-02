/**
 * Generates tabs and content for different endpoints.
 */

const tabs = [
    {
        id: "getBasic",
        divID: "basicInfoContent",
        title: "GET",
        requestEndpoint: "http://localhost:3000/attractions/7",
        hasBodyCode: false,
        hasSuccessError: false
    },
    {
        id: "putBasic",
        divID: "basicInfoContent",
        title: "PUT",
        requestEndpoint: "http://localhost:3000/attractions/1",
        hasBodyCode: true,
        hasSuccessError: true
    },
    {
        id: "deleteBasic",
        divID: "basicInfoContent",
        title: "DELETE",
        requestEndpoint: "http://localhost:3000/attractions/56",
        hasBodyCode: false,
        hasSuccessError: false
    },
    {
        id: "getDetails",
        divID: "detailedContent",
        title: "GET",
        requestEndpoint: "http://localhost:3000/attractions/7/details",
        hasBodyCode: false,
        hasSuccessError: false
    },
    {
        id: "putDetails",
        divID: "detailedContent",
        title: "PUT",
        requestEndpoint: "http://localhost:3000/attractions/attraction_id/details",
        hasBodyCode: true,
        hasSuccessError: true
    },
    {
        id: "postDetails",
        divID: "detailedContent",
        title: "POST",
        requestEndpoint: "http://localhost:3000/attractions/attraction_id/details",
        hasBodyCode: true,
        hasSuccessError: true
    },
    {
        id: "getImages",
        divID: "imagesContent",
        title: "GET",
        requestEndpoint: "http://localhost:3000/attractions/26/images",
        hasBodyCode: false,
        hasSuccessError: false
    },
    {
        id: "putImages",
        divID: "imagesContent",
        title: "PUT",
        requestEndpoint: "http://localhost:3000/attractions/attraction_id/images",
        hasBodyCode: true,
        hasSuccessError: true
    },
    {
        id: "postImages",
        divID: "imagesContent",
        title: "POST",
        requestEndpoint: "http://localhost:3000/attractions/20/images",
        hasBodyCode: true,
        hasSuccessError: true
    },
    {
        id: "getVideos",
        divID: "videosContent",
        title: "GET",
        requestEndpoint: "http://localhost:3000/attractions/13/videos",
        hasBodyCode: false,
        hasSuccessError: false
    },
    {
        id: "putVideos",
        divID: "videosContent",
        title: "PUT",
        requestEndpoint: "http://localhost:3000/attractions/attraction_id/videos",
        hasBodyCode: true,
        hasSuccessError: true
    },
    {
        id: "postVideos",
        divID: "videosContent",
        title: "POST",
        requestEndpoint: "http://localhost:3000/attractions/attraction_id/videos",
        hasBodyCode: true,
        hasSuccessError: true
    }
];


/**
 * Generates HTML content for tabs based on provided data.
 * @param {*} divID ID of the div to populate with generated content
 * @param {*} tabs Array of tab objects containing endpoint information
 * @returns Generated HTML content for tabs and their content
 */
function generateTabsAndContent(divID, tabs) {

    let parameterTableHTML = `
        <table class="table parameter-table">
            <thead>
                <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Valid Values</th>
                </tr>
            </thead>  
            <tbody>
                <tr>
                    <th scope="row">attraction_id</th>
                    <td>int</td>
                    <td>the ID of the attraction</td>
                    <td>A valid ID from the database. Make a request to the All Attractions endpoint to see all of the available attractions, and their unique ID's in the database. </td>
                </tr>
            </tbody>
        </table>`;

    let tabsHTML = `
        <div class="example">
            <h4>Example Request and Response</h4>
            <ul class="nav nav-tabs" role="tablist">`;

    let contentHTML = '<div id="myTabContent" class="tab-content">';

    // Loop through each tab object
    tabs.forEach(tab => {
        
        if (tab.divID === divID) {
            tabsHTML += `
            <li class="nav-item" role="presentation">
                <a class="nav-link ${tab.title === 'GET' ? 'active' : ''}" data-bs-toggle="tab" href="#${tab.id}" aria-selected="${tab.title === 'GET'}" role="tab">${tab.title}</a>
            </li>`;

            contentHTML += `
                <div class="tab-pane fade ${tab.title === 'GET' ? 'show active' : ''}" id="${tab.id}" role="tabpanel">`
            
            if (tab.id === 'putBasic' || tab.id === 'putDetails') {
                contentHTML += `<p>It is not required to provide data for all fields in the body. The following request example illustrates all of the possible 
                                fields that would be updated.</p>`
            }

            if (tab.id === 'postDetails') {
                contentHTML += `<p>It is optional to provide data for the 'images' and 'videos' fields. If you want to add images or videos later, 
                                you may use the 'Attraction Images' and 'Attraction Videos' endpoints respectively.`
            }
            
            contentHTML += `<div class="codeExample">
                                <code class="request">${tab.requestEndpoint}</code>`;

            if (tab.title == 'GET' || tab.id == 'deleteBasic') {
                contentHTML += `
                <pre>
                    <code class="response"><!-- Code inserted through codeExample.js --></code>
                </pre>`
            }

            if (tab.hasBodyCode) {
                contentHTML += `
                    <div class="codeExample" id="bodyCode">
                        <h5>REQUEST BODY EXAMPLE</h5>
                        <pre>
                            <code class="response body-code"><!-- Code inserted through codeExample.js --></code>
                        </pre>
                    </div>`;
            }

            if (tab.hasSuccessError) {
                contentHTML += `
                    <div class="codeExample" id="succOrErrCode">
                        <h5>POSSIBLE RESPONSES - SUCCESS AND ERROR MESSAGES</h5>
                        <pre>
                            <code class="response suc-or-err-code"><!-- Code inserted through codeExample.js --></code>
                        </pre>
                    </div>`;
            }

            contentHTML += `</div></div>`;
        }
    });

    tabsHTML += `</ul></div>`;
    contentHTML += `</div>`;

    return parameterTableHTML + tabsHTML + contentHTML;
}

// On document ready, generate tabs and content for different divs
$(document).ready(function() {
    $('#detailedContent').append(generateTabsAndContent("detailedContent", tabs));
    $('#basicInfoContent').append(generateTabsAndContent("basicInfoContent", tabs));
    $('#imagesContent').append(generateTabsAndContent("imagesContent", tabs));
    $('#videosContent').append(generateTabsAndContent("videosContent", tabs));
});

