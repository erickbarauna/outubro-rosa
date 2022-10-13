let show = true

const menuToggle = menuSection.querySelector(".menu-toggle");

function Clique() {
    document.querySelector(".menu-section").classList.toggle("on", show) // Essa função toggle põe ou tira uma class da tag, no caso (".menu-section")
    show = !show;
}