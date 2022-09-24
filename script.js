const menu = document.querySelector('#hamburger');
const content = document.querySelector('.menu');

let menuOn = false;
menu.addEventListener("click", ()=>{
    menuOn = !menuOn;

    if(menuOn){
        content.style.display = '';
    }else{
        content.style.display = 'none';
    }
});