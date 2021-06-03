//jashint esversion:6
 exports.getDate = function(){
     const today = new Date();
     const options = { weekday: 'long', month: 'long', day: 'numeric' };
     return today.toLocaleDateString("en-US",options);

 }

module.exports.getDay = getDay;
 function getDay(){
     const today = new Date();
     const options = { weekday: 'long'};
     const day = today.toLocaleDateString("en-US",options);

     return day;
 }
