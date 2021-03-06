REQUIREMENTS

Must render at least one index page (index resource - 'list of things') via jQuery and an Active Model Serialization JSON Backend. For example, in a blog domain with users and posts, you might display the index of the users posts on the users show page, fetching the posts via an AJAX GET request, with the backend rendering the posts in JSON format, and then appending the posts to the page.  (Index page can be viewed in html or json format.  (I am rendering the trips to the index page and then getting a random price for the trip via a javascript method)

Must render at least one show page (show resource - 'one specific thing') via jQuery and an Active Model Serialization JSON Backend. For example, in the blog domain, you might allow a user to sift through the posts by clicking a 'Next' button on the posts show page, with the next post being fetched and rendered via JQuery/AJAX.  (I can scroll through the trips via a next link - all the trip information and weather API info gets updated) 

The rails API must reveal at least one has-many relationship in the JSON that is then rendered to the page. For example if each of those posts has many comments, you could render those comments as well on that show page. 
(on a users show page - i am rendering comments they create - we can scroll through each one at a time).

Must use your Rails API and a form to create a resource and render the response without a page refresh. For example, a user might be able to add a comment to a post, and the comment would be serialized, and submitted via an AJAX POST request, with the response being the new object in JSON and then appending that new comment to the DOM using JavaScript (ES6 Template Literals, can help out a lot with this).  (Added a weather app that makes a GET request to openweathermap.org's API, the successful response provides me with data that I am appending to the page)

Must translate the JSON responses into Javascript Model Objects. The Model Objects must have at least one method on the prototype. Formatters work really well for this. ( i'm thinking this is done?  I have two methods - a random price generator and a method that talks to you based on the weather API response)

Borrowing from the previous example, instead of plainly taking the JSON response of the newly created comment and appending it to the DOM, you would create a Comment prototype object and add a function to that prototype to perhaps concatenate (format) the comments authors first and last name. You would then use the object to append the comment information to the DOM.  (weatherUpdate function created - simple if statement to check if the json has certain keywords - if it does, we append some descriptive text to the DOM)






Prelim Plan - 

Create own Authentication - bcrypt gem  -- DONE

Create simple validations for: 

logged in users - DONE 

users can view their profile pages but not another persons profile pages  -  


A user will look at vacation sights and book a trip - a user has many

Trips will save to their profile page (think air bnb)

A user can add trips to their wishlist (maybe comments as well?)

Thinking AJAX GET to auto load between your wishlist and your actual trips on the profile page  (this could be bullet 5)

AJAX POST for comments