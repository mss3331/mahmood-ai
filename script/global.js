
document.addEventListener('DOMContentLoaded',()=>document.addEventListener('scroll', hideNavigation));

let old_scrollY=0;

function hideNavigation(event){
    console.log(window.scrollY-old_scrollY

    );
    if(window.scrollY-old_scrollY>2)
    {
        
        document.querySelector('nav').classList.add('nav-transparent');
    }
    if(window.scrollY-old_scrollY<-30)
    {
        document.querySelector('nav').classList.remove('nav-transparent');
    }
    old_scrollY=window.scrollY;
}