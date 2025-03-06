document.addEventListener('DOMContentLoaded',run);

function run(){
    // Unfold Click
    const cards_head=document.querySelectorAll('.front .card-title');
    cards_head.forEach(card=>card.addEventListener('click',unfoldLeftRight));

    // Contrast demo
    const contrast_checkbox = document.querySelector('.contrast-checkbox input');
    contrast_checkbox.addEventListener('click', showEnhancedImage)

    
        

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
            title.style.borderBottom ="2px solid black";
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
       
        
        //Change the border of the entire card
        // const mini_card=subcontents_container.parentElement;
        // mini_card.style.border="3px solid var(--projects-color)";

    

}

function showEnhancedImage(check_box_event){
    const enhanced_image= document.getElementById('enhanced_image');
    console.log(check_box_event.target.checked);
    if(check_box_event.target.checked)
        enhanced_image.style.opacity=1;
    else
        enhanced_image.style.opacity=0;

}