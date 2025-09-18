const form =document.querySelector('form')
const main_Number=parseInt(Math.random()*100+1)
const inputbox=document.querySelector('#guessField');
const submitguess = document.querySelector('#subt');
const  prevguess=document.querySelector('.guesses');
const  remguess=document.querySelector('.lastResult');
const loworhigh=document.querySelector('#lowOrHi')
const message=document.querySelector('#message')
console.log(main_Number)
form.addEventListener('submit',function(e){
e.preventDefault();
});
let prevguessarr=[]
submitguess.addEventListener('click' ,function(){ //adding event listener on submit button 
  push_value();
logic();
hints();
victory()
defeat()
inputbox.value='' //making the input box empty every time the submit button is clicked 
})

function victory(){
if(inputbox.value == main_Number){
message.innerHTML=  `congratulation you have guessed the correct the number whuch is ${inputbox.value}`;
submitguess.style.backgroundColor="blue"
submitguess.disabled=true;
setTimeout(() => {location.reload()}, 4000);
}
}
function defeat(){
    if(remguess.innerHTML == 0){
submitguess.style.backgroundColor=('red');
submitguess.style.width=('350px');
submitguess.value=(`the number to be guessesd was ${main_Number}`)
submitguess.disabled=true;
    }
}
function push_value(){
     let new_val=parseInt(inputbox.value);
    console.log(typeof new_val)
    if (typeof new_val==='number' && inputbox.value >=1 && inputbox.value <=100){
  prevguessarr.push(inputbox.value) // adding the numbers written in input box  to an array 
// console.log(prevguessarr) //displaying that array on console window
prevguess.innerHTML=prevguessarr // displaying the guesses in a section of previous guesses
remguess.innerHTML = parseInt(remguess.innerHTML) - 1;// updating  remaining guesses
    }
    else{
      submitguess.style.borderRadius= '2px solid red'
    }
}
function logic(){
    if(parseInt(remguess.innerHTML)<=0){ 
submitguess.disabled=true; // this will disable the submit button after all the tries have been used
inputbox.disabled=true // this eill disable the input area
message.innerHTML="sorry limit reached " // will display the message when limit reaches 
 setTimeout(() => { 
    // after reaching the limit of guesses it will autimatucally reload the pagr after 2 seconds 
     location.reload();
 }, 2000);
}
}
function hints(){
if (inputbox.value<main_Number){
message.innerHTML="the number to be guessed is greater than " + inputbox.value;
}
else{
message.innerHTML="the number to be guessed is less than " + inputbox.value;
}    
}