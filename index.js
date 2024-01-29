let rollBtn;
const min=1;
const max=5;
let num1;
let num2;
let num3;
rollBtn=document.getElementById('button').onclick=function(){

num1=Math.floor(Math.random() *max)+min;
num2=Math.floor(Math.random() *max)+min;
num3=Math.floor(Math.random() *max)+min;


mylabel1.textContent=num1;
mylabel2.textContent=num2;
mylabel3.textContent=num3;
}
