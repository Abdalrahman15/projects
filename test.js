
let search =document.getElementById("search")
let card1 = document.getElementById("card-1")
let card2 = document.getElementById("card-2")
let card3 = document.getElementById("card-3")
let data 




if(search.value===""){

   navigator.geolocation.watchPosition(
      async function (position) {
          var x = position.coords.latitude;
          var y = position.coords.longitude;
          
          async function location(x, y) {
              try {
                  let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${x}+${y}&key=9bfe01189cb3494da363662b14d106dd`);
                  let data = await response.json();
                  console.log(data.results[0].components.state);
                  var zz=  data.results[0].components.state

                  
                  await Api(zz)

                   
                     display1()
                     display2()
                     display3()
                   
                


              } catch (err) {
                  console.log("error", err);
              }

              return zz
          }
   
          await location(x, y);
          
      },
      function (err) {
          console.log(err);
      }
   )
}














search.addEventListener("input", async function(){


   
  let searchKey = search.value

  if (searchKey !== "") {
    await Api(searchKey)
     display1();
     display2();
     display3();
   } else {
   console.log("Stop");
 }

 

})


async function Api (searchKey) {


      try{

         let response =await fetch (`https://api.weatherapi.com/v1/forecast.json?key=d967ac9b1a0b47dea76153548240512&q=${searchKey}&days=3`)
          data = await response.json()
         console.log(data)
       }catch(err){
         console.log(err)
     
       }
       
   }

   







  





function display1(){

   
      
  card1.innerHTML=`
    <div class="row justify-content-between bg-card-1">
    <div class="col-6"><p>${dayOfWeak1 ()}</p></div>
    <div class="col-6 "><p class="d-flex justify-content-end">${dayOfMonth()}  <span>${ month ()}</span></p> </div>


  </div>

  

  
  
  
  <p>${data.location.name}</p>
  <h1  class="fs-1">${data.current.temp_c}<sup>o</sup>c</h1>
  <img src="https:${data.current.condition.icon}">
  <p class="text-primary">${data.current.condition.text}</p>
`


   

}


function display2(){
   
      card2.innerHTML=`

         <div class="row justify-content-between bg-card-2">
    <div class="col-12"><p>${dayOfWeak2 ()}</p></div>
    


  </div>




    
      <img src="https:${data.forecast.forecastday[1].day.condition.icon}">
      <h1>${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</h1>
      <p>${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>c</p>
      <p class="text-primary">${data.forecast.forecastday[1].day.condition.text}</p>
    `



   


}

function display3(){

 
      card3.innerHTML=`

              <div class="row justify-content-between bg-card-1">
    <div class="col-12"><p>${dayOfWeak3 ()}</p></div>
    


  </div>
      
      <img src="https:${data.forecast.forecastday[2].day.condition.icon}">
      <h1>${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</h1>
      <p>${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>c</p>
      <p class="text-primary">${data.forecast.forecastday[2].day.condition.text}</p>
    `


   


}



function dayOfWeak1 (){
  date = new Date()

let dayOfWeak = date.getDay()

if(dayOfWeak===0){
   return "Sunday"

}
if(dayOfWeak===1){
   return "Monday"
 
}
if(dayOfWeak===2){
   return "Tuesday"
  


}
if(dayOfWeak===3){
   return "Wednesday"
  
}
if(dayOfWeak===4){
   return "Thursday"
 

}
if(dayOfWeak===5){

  return "Friday"

}
if(dayOfWeak===6){
   return "Saturday"

}
}

function dayOfWeak2 (){
  date = new Date()

let dayOfWeak =  (date.getDay()+1)%7

if(dayOfWeak===0){
   return "Sunday"

}
if(dayOfWeak===1){
   return "Monday"
 
}
if(dayOfWeak===2){
   return "Tuesday"
  
}
if(dayOfWeak===3){
   return "Wednesday"
  
}
if(dayOfWeak===4){
   return "Thursday"
 
}
if(dayOfWeak===5){
  return "Friday"

}
if(dayOfWeak===6){
   return "Saturday"

}

}


function dayOfWeak3 (){
  date = new Date()

  let dayOfWeak =  (date.getDay()+2)%7

  if(dayOfWeak===0){
   return "Sunday"

}
if(dayOfWeak===1){
   return "Monday"
 
}
if(dayOfWeak===2){
   return "Tuesday"
  
}
if(dayOfWeak===3){
   return "Wednesday"
  
}
if(dayOfWeak===4){
   return "Thursday"
 
}
if(dayOfWeak===5){
  return "Friday"

}
if(dayOfWeak===6){
   return "Saturday"

}

}





function dayOfMonth(){

   date = new Date()

   let dayOfMonth = date.getDate()
   
   return dayOfMonth

}


function month (){
   date = new Date()
 
   let month =  date.getMonth()
 
 if(month===0){
    return "Jan"
 
 }
 if(month ===1){
    return "Feb"
  
 }
 if(month ===2){
    return "March"
   
 }
 if(month ===3){
    return "April"
   
 }
 if(month ===4){
    return "May"
  
 }
 if(month ===5){
   return "June"
 
 }
 if(month ===6){
    return "July"
 
 }
 if(month ===7){
    return "Aug"
 
 }
 if(month ===8){
    return "Sept"
 
 }
 if(month ===9){
    return "Oct"
 
 }
 
 if(month ===10){
    return "Nov"
 
 }
 
 if(month ===11){
    return "Dec"
 
 }
 
 }











