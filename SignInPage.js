var EmailInputIn = document.getElementById("signInEmail")
var PassInputIn = document.getElementById("signInPass")
var submitBtnIn = document.getElementById("submitBtnIn")
var sucess = document.getElementById("sucess")
var failed = document.getElementById("failed")
var empty = document.getElementById("empty")


var userArrIn = []


submitBtnIn.addEventListener("click",function(){
  submitIn ()
})

function submitIn (){

  userIn = {

    email:EmailInputIn,
    pass:PassInputIn,

  }

  if( EmailInputIn.value==="" || PassInputIn.value===""){


    empty.classList.remove("d-none")
    empty.classList.add("block")
    sucess.classList.add("d-none")
    failed.classList.add("d-none")
    console.log("empty")
  }

  userArrIn.push(userIn)




 

}