document.addEventListener('DOMContentLoaded',run);

function run(){
    const cards_head=document.querySelectorAll('.front .card-title');

    cards_head.forEach(card=>card.addEventListener('click',unfoldLeftRight));
    
        

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
        console.log(screen.width);
        if(screen.width<700){
            subcontents_container.style.border="3px solid var(--projects-color";
        }
        else{

            front.classList.add('border_bottom');
            right.classList.add('border_bottom');
            right.classList.add('border_right');
            left.classList.add('border_bottom');
            left.classList.add('border_left');
        }
        // shiftback the card to its position to the right
        subcontents_container.parentElement.classList.toggle("shift-right");
        
        //Change the border of the entire card
        // const mini_card=subcontents_container.parentElement;
        // mini_card.style.border="3px solid var(--projects-color)";

    

}