/* INDEX PAGE append random price to the screen - Index Page  */
  $(function() {
    $('.js-more').on("click", function(){
     var id = $(this).data("id")

     $.get("/trips/" + id + ".json", function(data) {
      $(`li#${id} h6`).html(data.description + " test")
      })/* ajax request end */
    }) /* button on click end */
  }) /* top level function end */




// REPLACE TEST ABOVE WITH A NEW FUNCTION THAT APPENDS A RANDOM PRICE 
