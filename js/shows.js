var json = [
  {
		"date": "20180622",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/833794656821517/",
		"venue": {
			"name": "Spirit",
			"city": "Pittsburgh",
			"state": "PA"
		},
		"otherBands": [
			"Curtail",
      "Old Game"
		]
	},
  {
		"date": "20180623",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/210709219709430/",
		"venue": {
			"name": "It's a Kling Thing",
			"city": "Akron",
			"state": "OH"
		},
		"otherBands": [
			"Alomar",
      "Willow Lacey Hawks",
      "Wes Meadows"
		]
	},
  {
		"date": "20180624",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/240826203350931/",
		"venue": {
			"name": "Shakespeares Lower Level",
			"city": "Kalamazoo",
			"state": "MI"
		},
		"otherBands": [
			"Guppy"
		]
	},
  {
		"date": "20180625",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/205871456688496/",
		"venue": {
			"name": "Empty Bottle",
			"city": "Chicago",
			"state": "IL"
		},
		"otherBands": [
			"Options",
      "Jodi",
      "V.V. Lightbody"
		]
	},
  {
		"date": "20180626",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/261947751045900/",
		"venue": {
			"name": "Hoosier Dome",
			"city": "Indianapolis",
			"state": "IN"
		},
		"otherBands": [
			"Summerbruise",
      "Cody Almond and the Moving Company",
      "Drama Moth",
      "Fear Not Ourselves Alone"
		]
	},
  {
		"date": "20180627",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/843817625826335/",
		"venue": {
			"name": "Two Boots Nashville",
			"city": "Nashville",
			"state": "TN"
		},
		"otherBands": [
			"Mama Would Be Proud",
      "Shoe",
      "Rain Jacket"
		]
	},
  {
		"date": "20180628",
    "ticketLink": "https://chattpalace.myshopify.com/products/georges-free-beer-give-away",
    "eventLink": "https://www.facebook.com/events/2084562034891436/",
		"venue": {
			"name": "Palace Theatre",
			"city": "Chattanooga",
			"state": "TN"
		},
		"otherBands": [
			"Psychic Dungeon",
      "Thanks Cagoule",
      "Sinai Vessel"
		]
	},
  {
		"date": "20180629",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/453411428437876/",
		"venue": {
			"name": "Heaven's Inn",
			"city": "Raleigh",
			"state": "NC"
		},
		"otherBands": [
			"Noah Cross",
      "Julian Waits"
		]
	},
  {
		"date": "20180630",
    "ticketLink": null,
    "eventLink": "https://www.facebook.com/events/1675238215917522/",
		"venue": {
			"name": "Flora",
			"city": "Richmond",
			"state": "VA"
		},
		"otherBands": [
			"Doll Baby",
      "Gull",
      "No Thank You",
      "Cheer Up"
		]
	},
  {
		"date": "20180707",
    "ticketLink": null,
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
              
              <div class="shows-list-date show-info-div">${getReadableDate(json[i].date)}</div>
              <div class="venue-city show-info-div">${json[i].venue.city}, ${json[i].venue.state}</div>
              <div class="show-info-div">${json[i].venue.name}</div>

              <div class="other-bands">w/ ${getBandsAsString(json[i].otherBands)}</div>
            </div>

            <div class="buttons-container">
              <a class="shows-list-button" href="${json[i].ticketLink == null ? json[i].eventLink : json[i].ticketLink}"><div>tickets</div></a>
              <a class="shows-list-button" href="${json[i].eventLink}"><div>rsvp</div></a>
            </div>
          </div>
        </li>
      `
    );
  }

});

// $(document).ready(function() {
//   for (var i = 0; i < json.length; i++) {
//     $("#shows-list").append(
//       `
//         <li>
//           <div class="row">
//             <div class="show-info-container">
//               <div class="shows-list-date">${getReadableDate(json[i].date)}</div>
//               <div class="venue-city">${json[i].venue.city}, ${json[i].venue.state}</div>
//               <div>
//                 ${json[i].venue.name}
//                 <p class="other-bands">w/ ${getBandsAsString(json[i].otherBands)}</p>
//               </div>
//             </div>
//
//             <div class="buttons-container">
//               <a class="shows-list-button" href="${json[i].ticketLink == null ? json[i].eventLink : json[i].ticketLink}"><div>tickets</div></a>
//               <a class="shows-list-button" href="${json[i].eventLink}"><div>rsvp</div></a>
//             </div>
//           </div>
//         </li>
//       `
//     );
//   }
//
// });
