
document.addEventListener('DOMContentLoaded',run);

let old_scrollY=0;
function hideNavigation(event){
    
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
function closeDemo(){
    document.querySelector('.demo').remove();
    sessionStorage.setItem("demo","true");
}
function run(){
    document.addEventListener('scroll', hideNavigation);
    const demo=sessionStorage.getItem("demo");

    if(demo==undefined && window.screen.width<700)
    {
        document.querySelector('.demo').style.opacity="1";
        document.querySelector('#close_demo_icon').addEventListener('click', closeDemo);
    }
    else
        closeDemo();
}