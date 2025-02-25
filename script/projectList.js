document.addEventListener('DOMContentLoaded',run);

function run(){
    const cards_head=document.querySelector('.front .card-title');

    cards_head.addEventListener('click',unfoldLeftRight);
        

}

function unfoldLeftRight(event)
{
    let subcontents_container=event.target;
        // find the container so that you can search for left and rigth to rotate
        while(!subcontents_container.classList.contains("subcontents-container")){
            // console.log(subcontents_container);
            subcontents_container = subcontents_container.parentElement;
        } 
        // Unboxing effect
        const icons = subcontents_container.querySelectorAll('i');
        icons[0].classList.toggle('hide');
        icons[1].classList.toggle('hide');

        const left=subcontents_container.querySelector('.left');
        const right=subcontents_container.querySelector('.right');
        const front=subcontents_container.querySelector('.front');
        // Fold or unfold
        left.classList.toggle('rotateRight');
        right.classList.toggle('rotateLeft');

        // change title text + card-title background + borders
        const card_titles = subcontents_container.querySelectorAll('.card-title');
        card_titles.forEach(title=>{
            title.style.backgroundColor="var(--projects-color)";
            front.querySelector('.card-title p').textContent="Viewed";
        });
        front.classList.add('border_bottom');
        right.classList.add('border_bottom');
        right.classList.add('border_right');
        left.classList.add('border_bottom');
        left.classList.add('border_left');

    

}