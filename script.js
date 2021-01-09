$(document).ready(function () {

    // Object with Hours/Hourly Events.

var times = [
    { hour: 9, hourlyEvent: "" },
    { hour: 10, hourlyEvent: "" },
    { hour: 11, hourlyEvent: "" },
    { hour: 12, hourlyEvent: "" },
    { hour: 13, hourlyEvent: "" },
    { hour: 14, hourlyEvent: "" },
    { hour: 15, hourlyEvent: "" },
    { hour: 16, hourlyEvent: "" },
    { hour: 17, hourlyEvent: "" },]


    if(localStorage.getItem("savedInput")){ // "savedInput: Names of things were saving to local storage.
        times = JSON.parse(localStorage.getItem("savedInput"));
    }
    
   //Displaying Current Date
    function alwaysToday() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    setInterval(alwaysToday, 500); // /Work on getting current date to load asap.

    for (i = 0; i < times.length; i++) {
        var changeAmPm = " pm ";
        var hourlyColor = "past"
        var time = times[i].hour;

        if (times[i].hour <= 12) {  // Conditional statements for:
            changeAmPm = "am";      // updating time from AM - PM and Colors based on which hour is past present or future
        }

        if (time > 12) {
            time -= 12 // Subtracting 12 from military time.
        }

        if (times[i].hour == moment().hour()) {
            hourlyColor = "present";

        } else if (times[i].hour == moment().hour()) {
            hourlyColor = "future";
        }

        // Variables
        var newRow = $("<div>").attr("class", "row");
        var hourValue = $("<div>").attr("class", "col-md-1 hour pt-4 ").text(time + changeAmPm);
        var inputValue = $("<textarea>").attr("id", times[i].hour).attr("class", "col-md-10 " + hourlyColor).html(times[i].hourlyEvent);
        var saveBtn = $("<div>").attr("class", "col-md-1 saveBtn").attr("btn-id", times[i].hour);
        var icon = $("<i>").attr("class", "far fa-save");

       // Adding Rows
        newRow.append(hourValue, inputValue, saveBtn);
        saveBtn.append(icon);
        $(".container").append(newRow)

    }

// Code for saving input to local storage
    $(".saveBtn").on("click", function () {
        let btnId = $(this).attr("btn-id")
        let arrayIndex = times.findIndex(i=>i.hour==btnId) // Checking to see which index of array is matching hour.
        console.log(arrayIndex);
        times[arrayIndex].hourlyEvent = $("#" + btnId).val().trim()
        localStorage.setItem("savedInput", JSON.stringify(times)) // JSON converts the array into a string.
       

    })

}

);