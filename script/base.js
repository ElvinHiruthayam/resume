var headerID = 'headers'
document.onscroll = function () { cheHeader() };
function sendMail(){
    alert('Sending mail to elvinbca.ngp@gmail.com')
    var link = "mailto:elvinbca.ngp@gmail.com"
//            + "?cc=elvinbca.ngp@gmail.com"
            + "?subject=" + encodeURIComponent("This is my subject")
            + "&body=" + encodeURIComponent("Please compose the message..")
    ;
    
    window.location.href = link;
}
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