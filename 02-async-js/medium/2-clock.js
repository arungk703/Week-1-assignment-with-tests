function printTime(){
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var state = "AM";
    if(hours > 12){
        hours -= 12;
        state = "PM";
    }
    console.log(hours + ":"+ minutes + ":" + seconds + " " + state);
}

setInterval(printTime, 1000);