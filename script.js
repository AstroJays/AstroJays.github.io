/* Toggle menu */
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.left = "0";
}
function hideMenu() {
    navLinks.style.left = "-200px";
}

/* Smooth page transition */
var speed = 'normal';
$('html, body').hide();
$(document).ready(function () {
    $('html, body').fadeIn(speed, function () {
        $('a[href], button[href]').click(function (event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function () {
                window.location = url;
            });
        });
    });
});


/* The reveal function */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    once = 'true';
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
