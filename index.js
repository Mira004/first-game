const button=document.getElementById('button');
const p1=document.getElementById('p1');
const p2 =document.getElementById('p2');
const p3=document.getElementById('p3');
const max=5;
const min=1;
let result1, result2,result3;

button.onclick=function(){

    result1=Math.floor(Math.random()*max)+min;
p1.textContent=result1;
result2=Math.floor(Math.random()*max)+min;
p2.textContent=result2;
result3=Math.floor(Math.random()*max)+min;
p3.textContent=result3;
if(result1==result2 && result1==result3 && result2==result3){
p4.textContent=" Congrats You win!";

}else{
    p4.textContent="You lose! try again ";
}

}
