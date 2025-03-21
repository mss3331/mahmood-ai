let freez_control=true;
const overlap_container= document.querySelector('.overlap-container');
overlap_container.addEventListener('mousemove',moveOverlapControl);
overlap_container.addEventListener('touchmove',touchOverlapControl);
overlap_container.addEventListener('touchend',touchOverlapControlEnd);
const overlap_control= document.querySelector('.overlap-control');
overlap_control.addEventListener('mousedown',unfreezControl)
overlap_control.addEventListener('mouseup',freezControl)
const overlap_item2=document.querySelector('.overlap-item2');
let x;
// This function update mouseX_difference cordinates (how much it moved along X). Firefox have a bug related to mouse position for dragge event.
function moveOverlapControl(event){
    //Calculate it only once, otherwise a lagging effect happened
    if(!x)
        x = Math.floor(event.target.getBoundingClientRect().x);
    // let screenLog = document.querySelector("#screen-log");
    // screenLog.innerText = `
    // Screen X/Y: ${event.screenX} / ${event.screenY}
    // Client X/Y: ${event.clientX} /  ${event.clientY}
    // target position x: ${x}`;
    if(freez_control)
    {
        return;
    }
    overlap_control.style.opacity='0.2';
    // x=starting position of the block with respect to the viewport.
    const mouseX_updated= event.clientX-x;
 
    overlap_control.style.left=mouseX_updated+'px';
    overlap_item2.style.width=mouseX_updated+'px';
}
//for Phone and Tablet
function touchOverlapControl(event){
    console.log(event.target.getBoundingClientRect().x);
    if(!x)
        x = Math.floor(event.target.getBoundingClientRect().x);
    // hide control
    overlap_control.style.opacity='0.2';

    const mouseX_updated= event.touches[0].clientX-x;
    console.log(mouseX_updated);
    overlap_control.style.left=mouseX_updated+'px';
    overlap_item2.style.width=mouseX_updated+'px';
}
function touchOverlapControlEnd(event){
    // show control
    overlap_control.style.opacity='1';
    x = Math.floor(event.target.getBoundingClientRect().x);
}


function unfreezControl(event){
    freez_control=false;
}
function freezControl(event){
    freez_control=true;
    overlap_control.style.opacity='1';

}