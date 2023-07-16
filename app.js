//----------------------------------------------------
//if needed add global variables 

//----------------------------------------------------
//init function, call when window gets loaded
//----------------------------------------------------
function init () {
    console.log('initiated project portfolio...');
    // call classes and/or functions
    // add eventlisteners 
    var intro = document.getElementsByClassName('intro_div');
    var intro_info = document.getElementsByClassName('intro_div_information');
    show_sven(intro, intro_info);
}
window.addEventListener('load', init);

function show_sven(intro, intro_info) {
    intro[0].style.transform= "translateX(0) ";
    intro_info[0].style.transform= "translateX(0) ";
}