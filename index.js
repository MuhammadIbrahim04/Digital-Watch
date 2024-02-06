setInterval(()=>{
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let amPm = 'AM';

if(hour >= 12){
  amPm = 'PM'
};
if(hour > 12){
  hour = hour - 12
};
if(hour < 10){
  hour = '0'+hour
};
if(min < 10){
  min = '0'+min
};
if(sec < 10){
  sec = '0'+sec
}

  document.getElementById('timedisplay').innerHTML = hour + ':' + min + ':' + sec + ' ' + amPm;

},1000)