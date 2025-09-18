const body=document.querySelector('body');
let right=document.querySelector('#right');
let left=document.querySelector('#left');
const stop = document.querySelector('#stop');
const start = document.querySelector('#start');
let red =false;
 let interval=null;
start.addEventListener('click',()=>{
    if (interval)return;
 interval=setInterval(()=>{

right.style.backgroundColor= red ? 'red':'blue';

left.style.backgroundColor= red ? 'blue':'red';
red=!red;
},100)
})

setInterval(()=>{

},1000)
stop.addEventListener('click',function(){

 left.style.backgroundColor='white'
 right.style.backgroundColor='white'
    clearInterval(interval)
interval=null}
)
    // this program generates the random colors of backgroung  
//  let color_func=()=>{
//     const rgbavalue=Math.floor(Math.random()*258+1);
//     return rgbavalue;
//  }
//  start.addEventListener('click',(e)=>{
 
// const interval=setInterval(() => {    
//     body.style.backgroundColor=`rgb(${color_func()},${color_func()},${color_func()})`
// console.log("created")
// }, 1000);
//  })
