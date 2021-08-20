function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec  = date.getSeconds();
    let session = "AM";

    if(hours > 12){
        hours -= 12;
        if(hours <= 9){
            hours = "0" + hours;
        }
        session = "PM";
    }
    if(min <= 9){
        min = "0" + min;
    }
    if(sec <= 9){
        sec = "0" + sec;
    }

    let clock = document.getElementById("clock");
    let time = hours + ":" + min + ":" + sec + " " + session;

    clock.innerHTML = time;
    setTimeout(showTime,1000)
};

function changeMode(){
    let bclass = document.body.classList;
    let status = document.getElementById("status");
    document.body.classList.toggle("dark-mode");
    if(bclass == "dark-mode"){
        status.innerHTML = "Night";
    }
    if(bclass == ""){
        status.innerHTML = "Day";
    }
}


showTime();