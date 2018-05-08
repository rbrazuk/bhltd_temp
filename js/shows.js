var json = [
  {
		"date": "20180531",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "Everybody Hits",
			"city": "Philadelphia",
			"state": "PA"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180622",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "Spirit",
			"city": "Pittsburgh",
			"state": "PA"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180623",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "It's a Kling Thing",
			"city": "Akron",
			"state": "OH"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180624",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "Shakespeare's",
			"city": "Kalamazoo",
			"state": "MI"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180625",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "Empty Bottle",
			"city": "Chicago",
			"state": "IL"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180626",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "TBA",
			"city": "Bloomington",
			"state": "IN"
		},
		"otherBands": [
			"jodi",
      "Options",
      "V.V. Lightbody"
		]
	},
  {
		"date": "20180627",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "TBA",
			"city": "Nashville",
			"state": "TN"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180628",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "TBA",
			"city": "Atlanta",
			"state": "GA"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180629",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "TBA",
			"city": "TBA",
			"state": "NC"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180630",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "TBA",
			"city": "Richmond",
			"state": "VA"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180701",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "TBA",
			"city": "Washington",
			"state": "DC"
		},
		"otherBands": [
			"TBA"
		]
	},
  {
		"date": "20180707",
    "ticketLink": "http://google.com",
    "eventLink": "http:facebook.com",
		"venue": {
			"name": "Asbury Park Brewery",
			"city": "Asbury Park",
			"state": "NJ"
		},
		"otherBands": [
			"Ragged Lines",
			"Blood Orphans",
			"Kill yr. Idolz"
		]
	},
]

var getReadableDate = function(dateString) {
  var year = dateString.slice(0,4);
  var month = dateString.slice(4,6);
  var day = dateString.slice(6,8);
  return(month + "/" + day + "/" + year);
}

var getBandsAsString = function(bandsArray) {
  var bands = "";
  for (var i = 0; i < bandsArray.length; i++) {
    if (i != bandsArray.length - 1) {
      bands += bandsArray[i] + ", ";
    } else {
      bands += bandsArray[i];
    }

  }
  return bands;
}

$(document).ready(function() {
  for (var i = 0; i < json.length; i++) {
    $("#shows-list").append(
      `
        <li>
          <div class="row">
            <div class="show-info-container">
              <div class="shows-list-date">${getReadableDate(json[i].date)}</div>
              <div>${json[i].venue.city}, ${json[i].venue.state}</div>
              <div>
                ${json[i].venue.name}
                <p class="other-bands">w/ ${getBandsAsString(json[i].otherBands)}</p>
              </div>
            </div>

            <div class="buttons-container">
              <a class="shows-list-button" href="${json[i].ticketLink}"><div>tickets</div></a>
              <a class="shows-list-button" href="${json[i].eventLink}"><div>rsvp</div></a>
            </div>
          </div>
        </li>
      `
    );
  }

});
