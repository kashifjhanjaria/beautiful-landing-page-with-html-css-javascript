const sunicon = document.querySelector('#sunicon');
const html = document.querySelector('html');
html.setAttribute('class' ,'light')
const changeicon =document.querySelector('.fa-sun');
console.log(changeicon);
let light =0;
 sunicon.addEventListener('click' , ()=>{
     if (light == 0) {
        //  console.log("Hello");
        html.setAttribute('class' ,'dark')
        changeicon.classList.remove('fa-sun');
        changeicon.classList.add('fa-moon');
         light =1
     }else{
        html.setAttribute('class' ,'light')
        //  console.log("bye");
        changeicon.classList.remove('fa-moon');
        changeicon.classList.add('fa-sun');
         light = 0;
     }
   
 })