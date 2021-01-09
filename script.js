$(document).ready(function () {

    //object of times

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


    if(localStorage.getItem("savedInput")){ // "Sav"
        times = JSON.parse(localStorage.getItem("savedInput"));
    }
    


    //Displaying Current Date
    function alwaysToday() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    setInterval(alwaysToday, 500);
    //Work on getting current date to load asap.
    for (i = 0; i < times.length; i++) {
        var changeAmPm = " pm ";
        var hourlyColor = "past"
        var time = times[i].hour;

        if (times[i].hour <= 12) {
            changeAmPm = "am";
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



        newRow.append(hourValue, inputValue, saveBtn);
        saveBtn.append(icon);
        $(".container").append(newRow)
        // Setting up color coded blocks for past, current, and present hours.
        // Past = White | Present = Tan | Future = Gray

    }




    // Code for saving input to local storage
    $(".saveBtn").on("click", function () {
        let btnId = $(this).attr("btn-id")
        let arrayIndex = times.findIndex(i=>i.hour==btnId) // Checking to see which index of array is matching hour.
        console.log(arrayIndex);
        times[arrayIndex].hourlyEvent = $("#" + btnId).val().trim()
        localStorage.setItem("savedInput", JSON.stringify(times)) // JSON is saving array. JSON converts the array into a string.
       

    })

}

);





/*<div class="row">
        <div class="col-md-1 hour pt-4">10am</div>
        <input id="10Row" class="user-event-input col-md-10 event-input-block">
        <div class="col-md-1 saveBtn" data-hour=10><i class="far fa-save" aria-hidden="true"></i></div>
      </div> */
