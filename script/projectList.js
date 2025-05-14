document.addEventListener('DOMContentLoaded',run);

function run(){
    // Unfold Click
    const cards_head=document.querySelectorAll('.front .card-title');
    cards_head.forEach(card=>card.addEventListener('click',unfoldLeftRight));

    //Rotation cards
    const rotation_animation_cards= document.querySelectorAll('.rotation-animation');
    rotation_animation_cards.forEach(
        rotation_animation_container => positionMiniCards(rotation_animation_container)
    );
    
    //Pagination arrows
    const paginations = document.querySelectorAll('.pagination-button');
    paginations.forEach(
        pagination => pagination.addEventListener('click',activatePagination)
    );

    

    
        

}
//add behavior to pagination
function activatePagination(event){

    const pagination_button = event.currentTarget;
    const rotation_offset = pagination_button.dataset.offset;
    
    const rotation_container = pagination_button.parentElement.parentElement.querySelector('.rotation-animation');
    
    if(rotation_container.style.transform.search('translateZ')<0)
        rotation_container.style.transform="translateZ(-500px)";
    rotation_container.style.transform +=`rotateY(${rotation_offset}deg)`;

}
// count how many mini cards and rotate accordingly
function positionMiniCards(rotation_animation_container){
    const mini_cards = rotation_animation_container.querySelectorAll('.mini-card');
    const angle_offset = 360/mini_cards.length;
    var angle=0;
    mini_cards.forEach(mini_card=>{
        mini_card.style.transform=`rotateY(${angle}deg) translateZ(500px)`;
        angle+=angle_offset;
    });

    // set the angle offset for each pagination button. 
    // later it will used to rotat roation_animation_container
    const pagination = rotation_animation_container.parentElement.querySelector('.pagination');
    pagination.querySelector('.pagination-left').setAttribute('data-offset',angle_offset);
    pagination.querySelector('.pagination-right').setAttribute('data-offset',-angle_offset);
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
        const icons = subcontents_container.querySelectorAll('.front i');
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