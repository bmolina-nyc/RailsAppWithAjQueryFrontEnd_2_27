$(document).ready(function() {
  listeners();
});


function listeners(){
   $('#getTrip').on("click", function(){
 
  })
}

/* SHOW PAGE click the next - append new data to the page without a refresh*/
 $(function () {
    $(".js-next").on("click", function() {
      event.stopPropagation()
      var nextId = parseInt($(".js-next").attr("data-id")) + 1;
      $.get("/trips/" + nextId + ".json", function(data) {
        // get post
        var trip_data = data;
        $(".tripTitle").text(trip_data["name"]);
        $(".tripBody").text(trip_data["description"]);
        $('input#city').val(trip_data["name"]);
        $('div.tripImage').html(`<img alt="trip${nextId}" width="240px" height="160px" src="/assets/trip_${nextId}.jpeg">`);
        $('#container h4').html("Get The Current Weather In " + trip_data["name"]);
        $("#resultsDiv").empty();
        // re-set the id to current on the link
        $(".js-next").attr("data-id", trip_data["id"]);
      });
    });
  });

/* SHOW PAGE weather api call*/ 
 $(document).ready(function (){
    $('#btnGetWeather').click(function(){
      // the data from the inputs
      var requestData = $('#city').val() + ',' + $('#country').val();
      var resultElement = $('#resultsDiv');

      //the API call 
          $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${requestData}&APPID=8971378f99c3f36f5f8322ef875fa787`,
        method: 'get',
        dataType: 'json',
        success: function(data){
            resultElement.html('Weather: ' + data.weather[0].main + '<br/>' + 
              'Description: ' + data.weather[0].description + '<br/>' + `<div id="temperature">Temp: ${kelvinFarenheit(data.main.temp)} Degrees </div>` ) + '<br/>' + weatherUpdate(); 
              }
            }).fail(function(error) {
                resultElement.html("No information Found!")
              });
            });
          });

/* SHOW PAGE depending on weather, we append a descriptive sentence to the DOM */ 
      function weatherUpdate(){
        var tempStr = $('#resultsDiv div#temperature').html()
        var tempInt = parseInt(tempStr.match(/\d+/)[0])  /* takes the api value of temperature and makes an integer*/

        if (tempInt < 40){
          $("#resultsDiv").append("<br/>" + "<strong>It's pretty cold today!<strong>" )
        } else if (tempInt > 40 && tempInt <= 60) {
          $("#resultsDiv").append("<br/>" + "<strong>It's a bit cool out today!<strong>" )
        } else if (tempInt > 60 && tempInt <= 80 ) {
          $("#resultsDiv").append("<br/>" + "<strong>It's pretty warm out!<strong>" )
        } else if ( tempInt < 81 ) {
          $("#resultsDiv").append("<br/>" + "<strong>It's really hot out!<strong>" )
        }
  }  

/* SHOW PAGE - convert API Kelvin reading to farenheit */
    function kelvinFarenheit(temp){
      return Math.round(temp * 1.8 - 459.67)
    }




  //   var url = `/users/${current_user.id}/trips`
  //   method = "POST"
  // }

  // $.ajax({
  //   url: url,
  //   method: method,
  //   dataType: "json",
  //   data: {
  //     game: {
  //       state: getMarks()
  //     }
  //   },
  //   success: function(data) {
  //     if(resetCurrentGame) {
  //       currentGame = undefined;
  //     } else {
  //       currentGame = data.game.id;
  //     }
  //   }






