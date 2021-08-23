function showDate() {
    const d = new Date();
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let months = d.getMonth();
    let date = d.getDate();
    let month = monthsArr[months];
    let year = d.getFullYear();
    let today = date+ " " + month + " " + year;

    let todayDate = document.getElementById("date");
    todayDate.innerHTML = today;
}

function showTime(){
    const d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec  = d.getSeconds();
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
showDate();