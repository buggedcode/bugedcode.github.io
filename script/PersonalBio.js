
const C_START_ANIM_DELAY = 500;    //ms
(function run(){

    setTimeout( () => {
        animateLetter('b_letter');
    }, C_START_ANIM_DELAY + 0);
    setTimeout( () => {
        animateLetter('c_letter');
    }, C_START_ANIM_DELAY + 200);
    setTimeout( () => {
        animateLetter('o_letter');
    }, C_START_ANIM_DELAY + 380);
    setTimeout( () => {
        animateLetter('d_letter');
    }, C_START_ANIM_DELAY + 540);
    setTimeout( () => {
        animateLetter('e_letter');
    }, C_START_ANIM_DELAY + 680);
})();



function animateLetter(elmId){
    console.log(elmId);
    let elm = document.getElementById(elmId);
    elm.classList.add("letter_animation");

    elm.addEventListener('animationend', () => {
        console.log(`animation end for letter ${elmId}`);
    })
}