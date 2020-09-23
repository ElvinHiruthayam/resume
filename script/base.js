var headerID = 'headers'
document.onscroll = function () { cheHeader() };
function cheHeader() {
    element = document.getElementById(headerID);
    if (window.pageYOffset > 60) {
        element.classList.remove("header");
        element.classList.add("active");
    } else {
        element.classList.remove("active");
        element.classList.add("header");
    };
}
let element = document.getElementById(headerID);
element.classList.add("header");