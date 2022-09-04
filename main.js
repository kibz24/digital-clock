function displayClock () {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs >= 12) {
        session.innerText = "PM";
    
    } else {
        session.innerHTML = "AM"
    }
    if(hrs > 12) {
        hrs -= 12
    }


    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    

}
setInterval(displayClock, 10)