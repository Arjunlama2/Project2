


const getTime=()=>{
 let date=new Date()
let newDate={
    day:date.getDay(),
    month:date.getMonth(),
    date:date.getDate(),
    year:date.getFullYear(),
    time:date.toLocaleTimeString()

}

 displayDate(newDate)
}




function displayDate(newDate){
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let month= ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

           document.getElementById("Day").innerText=days[newDate.day] 
           document.getElementById("Month").innerText=month[newDate.month] 
           document.getElementById("Date").innerText=newDate.date
           document.getElementById("Year").innerText=newDate.year
           document.getElementById("time").innerText=newDate.time 


}


getTime()
