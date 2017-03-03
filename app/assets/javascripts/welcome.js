$(function() {
  toggleLogin();
})


function toggleLogin(){

  $('a').on("click", function(event){
    event.preventDefault(event);
        $('h3').replaceWith('<h3>Login or <a onClick="toggleSignup" href="#">Sign Up</a></h3>');

      if ($('div#signup')[0].style.cssText === "display: block;" || $('div#signup')[0].style.cssText === "display:block;") {
        
        $('div#signup')[0].style = "display: none;"
        $('div#login')[0].style = "display: block;"
      } 
    });

}


function toggleSignup(){

  $('a').on("click", function(event){
        $('h3').replaceWith('<h3>Sign Up or  <a onClick="toggleLogin" href="#">Login</a> </h3>');
    event.preventDefault(event);

   if ($('div#login')[0].style.cssText === "display: none;" || $('div#login')[0].style.cssText === "display:none;") {
       
        $('div#signup')[0].style = "display: block;";
        $('div#login')[0].style = "display: none;";
      }
    });

}
