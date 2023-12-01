let flag =0
slideShow(flag)
function slideShow(num){
let slides = document.getElementsByClassName("slider")

for(let y of slides){
   y.style.display="none"
}
if(num == slides.length){
   flag=0;
   num=0;
}
if(num<0){
   flag = slides.length-1;
   num=slides.length-1;
}
slides[num].style.display="block"
}
function controll(n){
flag = flag + n
slideShow(flag)
} 