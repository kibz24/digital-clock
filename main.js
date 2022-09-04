function displayClock () {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs >= 12) {
        session.innerText = "PM";
    
    } else {
        session.innerHTML = "AM"
    }
    if(hrs > 12) {
        hrs -= 12
    }


    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    

}
setInterval(displayClock, 10)