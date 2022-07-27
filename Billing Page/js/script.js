const hamBurger= document.querySelector('.hamburger-icon');
const container= document.querySelector('.container');
const body= document.querySelector('.body');

hamBurger.addEventListener('click',function(){
    if(container.classList.contains('open')){
        container.classList.remove('open');
        body.classList.remove('open');
    }
    else{
        container.classList.add('open');
        body.classList.add('open');

    }
})