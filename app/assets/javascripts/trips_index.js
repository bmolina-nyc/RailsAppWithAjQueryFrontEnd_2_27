/* INDEX PAGE append random price to the screen - Index Page  */
  $(function() {
    $('.js-more').one("click", function(){
     var id = $(this).data("id")

     $.get("/trips/" + id + ".json", function(data) {
      $(`li#${id} h6`).html(data.description + " -  " + `<strong id="cash">$${randomPrice()}</strong>`)
      })/* ajax request end */
    }) /* button on click end */
  }) /* top level function end */



/* get a cash value for a trip */
  function randomPrice(){
    return Math.floor(Math.random() * 1000)
  }