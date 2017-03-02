$(function() {
  toggleForm();
})


function toggleForm(){
$('a').on("click", function(){
  event.preventDefault();
  console.log("test")
    if ($('div#signup')[0].style.cssText === "display: block;") {
      $('div#signup')[0].style = "display: none;"
      $('div#login')[0].style= "display: block;"
    } else if ($('div#signup')[0].style.cssText === "display: none;"){
      $('div#signup')[0].style = "display: block;";
      $('div#login')[0].style = "display: none;";
    }
  })

}
