//Displaying Current Date
function alwaysToday(){
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(alwaysToday, 500);  
 //Work on getting current date to load asap.


// Setting up color coded blocks for past, current, and present hours.
// Past = White | Present = Tan | Future = Gray

// $(".hour").attr("data-time")





// Code for saving input to local storage
