const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway= document.querySelector('.giveaway')
const deadline=document.querySelector('.deadline')
const items= deadline.querySelectorAll('h4')

const futureDate=new Date(2022,5,30,13,40,0)
 const year=futureDate.getFullYear()
 const month=months[futureDate.getMonth()]
 const date =futureDate.getDate()
 const weekday=weekdays[futureDate.getDay()]
 const hour=futureDate.getHours()
 const minutes=futureDate.getMinutes()


 giveaway.textContent=`  The festival starts on ${weekday}, ${date} ${month} ${year}, at ${hour}:${minutes}`

 //Calculating the remaining time

 const futureTime=futureDate.getTime()
  function getRemaindingTime(){

    const today = new Date().getTime();
    const t= futureTime-today

    // 1s=1000ms
    //1m=60s
    //1hr=60min
    //1d=24hrs
 const oneDay=24*60*60*1000
const oneHour=60*60*1000
const oneMinute=60*1000
 //calculate all the values

let days=Math.floor(t/oneDay)
let hours=Math.floor((t % oneDay) / oneHour)
let minutes=Math.floor((t % oneHour)/oneMinute)
let seconds= Math.floor((t% oneMinute)/1000)

//set value array

const values=[days, hours, minutes, seconds]
function format(item){
  if(values < 10){
    return ` 0 ${item}`
  }
  return item
}
items.forEach(function(item, index){
  item.innerHTML=format(values[index])
})
//countdown

let countdown= setInterval(getRemaindingTime, 1000)

if(t<0){
  clearInterval(countdown)
  deadline.innerHTML=`<h4 class="expired"> Sorry the festival has already passed!</h4>`
  }

  }

 

  getRemaindingTime()