$(document).ready(function() {

});


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

        // re-set the id to current on the link
        $(".js-next").attr("data-id", trip_data["id"]);
      });
    });
  });

/* weather api call*/ 
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
              'Description: ' + data.weather[0].description) + '<br/>' + weatherUpdate(); 
            
              }
            }).fail(function(error) {
                resultElement.html("No information Found!")
              });
            });
          });


      function weatherUpdate(){
    if (    $('#resultsDiv').html().includes("Rain") || $('#resultsDiv').html().includes("rain") || $('#resultsDiv').html().includes("drizzle") ) {
      $("#resultsDiv").append("<br/>" + "<strong>It's rainy today!<strong>" )
    } else if (    $('#resultsDiv').html().includes("Clouds") || $('#resultsDiv').html().includes("clouds") || $('#resultsDiv').html().includes("cloudy") ) {
      $('#resultsDiv').append("<br/>" + "<strong>It's cloudy today!<strong>")
    } else if (    $('#resultsDiv').html().includes("Clear") || $('#resultsDiv').html().includes("clear") ) {
      $('#resultsDiv').append("<br/>" + "<strong>It's crystal clear today!<strong>")
    }
  }
