let keyPress;
var pattern = /^[0-9 ]+$/;
var re = /^[A-Z  ]{2,70}$/i;
function input_check() {
    document.addEventListener("keydown", function (event) {
        keyPress = event.key;
    });
}

function input2() {
    var cardNumber = document.querySelector(".input-number");
    var redsVal = cardNumber.value.replace(/\s/g, '');
    if (keyPress == 'Backspace') {
        redsVal.length = -1;
    }
    else if (redsVal.length % 4 == 0) {
        cardNumber.value += " ";
    }
}



function ok(messige){
    const inputName = document.querySelector(".input-name");
    const CardMessige = document.querySelector(".error-sms");
    let sms = messige;
    inputName.classList.remove("ok-input");
    inputName.classList.add("error-input");
    CardMessige.innerHTML= messige;
    CardMessige.classList.add("error-text");
    return sms
}
function error(){
    const inputName = document.querySelector(".input-name");
    ok("")
    inputName.classList.add("ok-input");
    
}
function numError(messige){
    const CardNumber = document.querySelector(".input-number");
    const CardMessige = document.querySelector("#error");
    CardNumber.classList.add("error-input");
    CardMessige.innerHTML= messige;
    CardMessige.classList.add("error-text");
    CardNumber.classList.remove("ok-input")
    return messige

}

function numOk(){
  numError("")
  const CardNumber = document.querySelector(".input-number");
  CardNumber.classList.add("ok-input")
}

function expyearError(messige){
    const CardDateYear = document.querySelector(".expyears");
    const CardDateSms = document.querySelector("#error2");
    CardDateYear.classList.add("error-input");
    CardDateSms.innerHTML=messige;
    CardDateSms.classList.add("error-text");
    CardDateYear.classList.remove("ok-input");
}

function expyearOk(){
    expyearError("")
    const CardDateYear = document.querySelector(".expyears");
    CardDateYear.classList.add("ok-input");
    
}

function cvError(messige){
    const cvClass = document.querySelector(".cvvs");
    const cvSms = document.querySelector("#error4");
    cvClass.classList.add("error-input");
    cvClass.classList.remove("ok-input");
    cvSms.innerHTML=messige;
    cvSms.classList.add("error-text");
}
function cvOk(){
    cvError("");
    const cvClass = document.querySelector(".cvvs");
    cvClass.classList.add("ok-input");

}

let Visible = document.querySelector("#expyear");

Visible = document.addEventListener("click", function(){
    let clasnew = document.querySelector(".expyears");
    clasnew.classList.add("expyears2");
})

function send(){

var re = /^[A-Z  ]{2,70}$/i;
var Exp= /^[0-9/]{10}$/i;
var ExpM= /^[0-9/]{4}$/i;
var cvc= /^[0-9]{3}$/i;
var fff = /^(?:\d{4}\s){3}\d{4}$/;
var pattern = /^[0-9 ]+$/;
let CardName = document.querySelector("#txts");
const CardNum = document.querySelector("#num").value.replace(/(.{4})(?!$)/g, '$1 ');
const CardDate = document.querySelector("#expyear").value;
const CvvNumber = document.querySelector("#cvv").value;

/*for(let i = 0; i<16; i++){
    if( CardName.value.length ==4){
        CardName.value = CardName.value + " "
        console.log(CardName.value.length);
        //console.log(i);
    }
}*/

if(!CardName.value.match(re)){
    ok("Woops! wrong format, simbols only.");
    

}else{
    error() 
}
if(!CardNum.match(pattern)){
    numError("Woops! wrong format, numbers only.")
}else{
    numOk()
}
if(CardDate.length==0){
    expyearError("Enter the date")
   
}else{
    expyearOk()
   

}
if(!CvvNumber.match(cvc)){
    cvError("There must be at least three numbers")
}else{
    cvOk()
}

}


/*function chekk(){
    let CardName = document.querySelector("#txts");
  if( CardName.value.length   == 4 || CardName.value.length == 9 || CardName.value.length == 14 ){
    CardName.value = CardName.value + " "
    console.log(CardName.value.length);
}
}*/
