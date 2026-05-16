// Listen to DOMContentLoaded event on document 
document.addEventListener('DOMContentLoaded', () => {
    // Code to run when the DOM is ready
    console.log('The DOM is fully loaded and parsed');

    console.log("Hello Gouthu");
    
    // accessing button and response DOM elements
    const btn1 = document.getElementById("btn1"); 
    const btn2 = document.getElementById("btn2");
    const responseElement = document.getElementById("response");
    const loadingElement = document.getElementById("loadingspinner"); 

    //adding eventlistener to the button 1 (event information)
    btn1.addEventListener("click", () => {
        loadingElement.innerHTML = "Loading...";
        responseElement.innerHTML = ""; // clearing the previous response
        getEventData();       
    });

    //adding eventlistener to the button 2 (Educator resources)
    btn2.addEventListener("click", () => {
        loadingElement.innerHTML = "Loading...";
        responseElement.innerHTML = ""; // clearing the previous response
        getEducatorResourcesData();
    });

});

//Function for fetching data from events API

async function getEventData() {
    try {
        const fetchResponse =  fetch('https://api.artic.edu/api/v1/events?limit=3');
        const loadingElement = document.getElementById("loadingspinner"); 
        loadingElement.innerHTML = "Loading...";

         console.log("waiting for promise");

        fetchResponse.then((apiResponse) => { //when promise resolves, it returns API response
            console.log("On promise resolving");
            apiResponse.json().then((json) => { //API response converts to json and promise resolves to get response in json
                console.log(json);
                const responseElement = document.getElementById("response"); //accessing the response DOM element
                let events = json.data; //pulling the data object from the response json and named as events
                const loadingElement = document.getElementById("loadingspinner"); 
                loadingElement.innerHTML = "";
                events.forEach(event => { // iterating each event and updating the DOM element html
                    let newHtml = responseElement.innerHTML + 
                        "<br/>" + "<h2><h2>" + event.title + 
                        "<br/><br/>" + 
                        "<h4><h4>" + "Location : " + event.location + 
                        "<br/><br/>" + event.date_display +
                        "<br/>" + "RSVP Link :  "+ "<i><i>"+ event.rsvp_link +
                        "<br/><br/>" + "<hr/>";
                    responseElement.innerHTML = newHtml;
                });
            })
        })

        console.log("after promise");

    } catch (error) {
        console.error('Error:', error);
    }
}

//creating the function for fetching data from Educator resources API

async function getEducatorResourcesData() {
    try {
        const fetchResponse = fetch('https://api.artic.edu/api/v1/educator-resources?limit=3');
        
        fetchResponse.then((apiResponse) => {
            apiResponse.json().then((json) => {
                const responseElement = document.getElementById("response");
                let educatorResources = json.data;
                const loadingElement = document.getElementById("loadingspinner"); 
                loadingElement.innerHTML = "";
               educatorResources.forEach(educatorResources => {
                    let newHtml = responseElement.innerHTML +
                    "<br/>" + "<h2> <h2>" + educatorResources.title + 
                    "<br/><br/>" +
                    "<h4><h4>" + educatorResources.copy + "<br/>" +
                    "<br/>" +
                    "website : " + "<i> <i>" + educatorResources.web_url + "<br/><br/>" +
                    "<hr/>";
                    responseElement.innerHTML = newHtml;
                });
            })
        })
          
    }
    catch (error) {
        console.error('Error:', error);
    }
}
    