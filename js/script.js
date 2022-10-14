let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImag
    e();
}, 6500)


function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}

let show = true

const menuToggle = menuSection.querySelector(".menu-toggle");

function Clique() {

    document.body.style.overflow = show ? "hidden" : "initial";

    document.querySelector(".menu-section").classList.toggle("on", show) // Essa função toggle põe ou tira uma class da tag, no caso (".menu-section")
    show = !show;
}