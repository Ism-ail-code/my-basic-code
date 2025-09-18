
// const grey_button =document.querySelector('#grey');
// const white_button =document.querySelector('#white');
// const blue_button =document.querySelector('#blue');
// const yellow_button =document.querySelector('#yelllow');
// grey_button.onclick =function(){
//     body.style.backgroundColor='grey'
// }
let body=document.body;
const buttons = document.querySelectorAll('span');
buttons.forEach((button)=>{
button.addEventListener(("click"),function(e) {
    body.style.backgroundColor=button.id
})
})