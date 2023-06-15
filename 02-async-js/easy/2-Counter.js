var counter = 0;

function countingTimer(){
    console.log(counter++);
    setTimeout(countingTimer, 1000);  
}

countingTimer();