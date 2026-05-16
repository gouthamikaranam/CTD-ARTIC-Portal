# Art Institute of Chicago

## About

CTD Pre-work project. I'm using the Art Institute of Chicago API's to fetch the art related data through a portal/website.

## Contact

Name: Gouthami Karanam
Email: gouthamikaranam2108@gmail.com

## Content

Through this website, users able to get the data/information related to events and educator Resources from the Art Institute of Chicago API's.

I have designed the HTML page with the Title: Art Institute of Chicago Information including the two buttons to get the data for the two end points event information and educator resources.

## Functionality

Button: Event Information
when a user clicks on this button, function getEventData() fetches the event data from the API https://api.artic.edu/api/v1/events?limit=3 and displays the list of all events sorted by last updated date in descending order.
I have set the limit of events as 3 so it displays 3 events on the response.

Each event data has the below information:
Event Title
Location
date_display
RSVP Link

Button: Educator Resources
when a user clicks on this button, function getEducatorResourcesData() fetches the educator Resources data from the API https://api.artic.edu/api/v1/educator-resources?limit=3 and displays the A list of all educator-resources sorted by last updated date in descending order. Same as above, I have set the limit of educator resources as 3.

Each Educator Resource data has the following information:
Title
Description
Website Link

## Instructions to run the code

1. run `git clone https://github.com/gouthamikaranam/CTD-ARTIC-Portal.git`
2. go to project folder `cd CTD-ARTIC-Portal`
3. run server `python3 -m http.server 6006`
4. load website on `http://localhost:6006/`
