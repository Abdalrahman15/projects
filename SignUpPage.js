var NameInput = document.getElementById("signUpName")
var EmailInput = document.getElementById("signUpEmail")
var PassInput = document.getElementById("signUpPass")
var submitBtn = document.getElementById("submitBtn")
var sucess = document.getElementById("sucess")
var failed = document.getElementById("failed")
var empty = document.getElementById("empty")
var EmailInputIn = document.getElementById("signInEmail")
var PassInputIn = document.getElementById("signInPass")
var submitBtnIn = document.getElementById("submitBtnIn")
var sucessIn = document.getElementById("sucessIn")
var failedIn = document.getElementById("failedIn")
var rowData = document.getElementById("diplayName")
var logOutBtn = document.getElementById("logOut")




var userArr = []


if(localStorage.getItem("userArr")!=null){

  userArr=JSON.parse(localStorage.getItem("userArr"))

}





submitBtn.addEventListener("click",function(){
  submit ()
})


function submit (){

  user = {

    name:NameInput.value,
    email:EmailInput.value,
    pass: PassInput.value,

  }

 var userExist=0

if(NameInput.value==="" || EmailInput.value==="" || PassInput.value===""){


  empty.classList.remove("d-none")
  empty.classList.add("block")
  sucess.classList.add("d-none")
  failed.classList.add("d-none")
  console.log("empty")
}else{
  for(var i =0 ; i<userArr.length ; i++){

    

    if(userArr[i].name.toLowerCase()==NameInput.value.toLowerCase()&&
    userArr[i].email.toLowerCase()==EmailInput.value.toLowerCase()&&
    userArr[i].pass.toLowerCase()==PassInput.value.toLowerCase()
    
  ){

     
      failed.classList.remove("d-none")
      failed.classList.add("d-block")
      sucess.classList.add("d-none")
      empty.classList.add("d-none")
      userExist=1
      break;
    }
   
  }

  if(userExist==0){
    userArr.push(user)
    localStorage.setItem("userArr",JSON.stringify(userArr))
    sucess.classList.remove("d-none")
    sucess.classList.add("d-block")
    failed.classList.add("d-none")
    empty.classList.add("d-none")
    goToHello(user.name);
    clearForm ()
   
  }

}
 

 
  
  
  

}


function clearForm (){
  user = {

    name:NameInput.value="",
    email:EmailInput.value="",
    pass: PassInput.value="",

  }
}

function clearFormIn (){
  user = {

    
    email:EmailInputIn.value="",
    pass: PassInputIn.value="",

  }
}








//----------
submitBtnIn.addEventListener("click",function(){
  submitIn ()
})

function submitIn (){

  userIn = {

    email:EmailInputIn,
    pass:PassInputIn,

  }

  var userExist=0

  if( EmailInputIn.value==="" || PassInputIn.value===""){


    empty.classList.remove("d-none")
    empty.classList.add("block")
    sucessIn.classList.add("d-none")
    failedIn.classList.add("d-none")
    console.log("empty")
  }else{

    for(var i =0 ; i<userArr.length ; i++){

    

      if(
      userArr[i].email.toLowerCase()==EmailInputIn.value.toLowerCase()&&
      userArr[i].pass.toLowerCase()==PassInputIn.value.toLowerCase()
      
    ){
  
       
        console.log("sucess")
        sucessIn.classList.remove("d-none")
        sucessIn.classList.add("d-block")
        failedIn.classList.add("d-none")
        empty.classList.add("d-none")
        goToHello(userArr[i].name);
        
       
        userExist=0
        clearFormIn()
        break;
       
      }else{
        console.log("u have to sign up")
        failedIn.classList.remove("d-none")
        failedIn.classList.add("d-block")
        empty.classList.add("d-none")
        sucessIn.classList.add("d-none")
      }
     
    }

    






  }

}









  function goToHello(userName) {

    localStorage.setItem("userName", userName);
    window.open("file:///D:/SignInPage/hello.html");
  }


  function logOut(){
    
    window.open("file:///D:/SignInPage/SignUpPage.html");



  }

  logOutBtn.addEventListener("click",function(){
    console.log

    logOut()


  })