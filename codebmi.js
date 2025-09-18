const form =document.querySelector('form');
form.addEventListener(('submit'), function(e){
e.preventDefault();
const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results')
if (height ===''|| height <0 ||isNaN(height)) {
results.innerHTML='enter right number';
setTimeout(() => {
location.reload();
}, 3000);
}
else if(weight ===''|| weight <0 ||isNaN(weight))
{
results.innerHTML='enter right number';
setTimeout(() => {
location.reload();
}, 3000);
}
else{
let bmi=(weight /((height * weight) /1000)).toFixed(2);
// results.innerHTML= `${bmi}`;

switch(true){
    case bmi<18.6 :
        results.innerHTML=`${bmi} and you are under weight`

break;
case bmi>18.6 && bmi< 24.9:
 results.innerHTML=`${bmi} you fall in the normal category`
break;
case bmi>24.9:
    results.innerHTML=`${bmi} you are overweight`
}
}
})