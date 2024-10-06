let finalDate=new Date("Dec 31, 2024 23:59:59 ").getTime();
let nowDate=new Date().getTime();
let counter=setInterval(()=>{
    //set now date in millieseconds
    let nowDate=new Date().getTime();
    //get difference
    let diff=finalDate-nowDate;
    //get days
    let days=Math.floor(diff/(1000*60*60*24));
    //get hours
    let hours=Math.floor(diff%(1000*60*60*24)/(1000*60*60));
    //get minutes
    let minutes=Math.floor(diff%(1000*60*60)/(1000*60));
    //get seconds
    let secs=Math.floor(diff%(1000*60)/1000);
    document.querySelector(".days").innerHTML=days<10?`0${days}`:days;
    document.querySelector(".hours").innerHTML=hours<10?`0${hours}`:hours;
    document.querySelector(".minutes").innerHTML=minutes<10?`0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML=secs<10?`0${secs}`:secs;
    if(diff===0){
        clearInterval(counter);
    }
},1000);