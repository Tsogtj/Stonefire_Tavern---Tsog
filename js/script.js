var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}
$(document).ready(function()
{
    $("#navbar").sticky({topSpacing:0});
});
(function ()
{
    window.sr = ScrollReveal({mobile: true, reset: false});
    sr.reveal("header .title div", {origin: "bottom", duration: 1250, delay: 250, distance: "100px",  easing: "ease-out"});
    sr.reveal("header .title h1", {origin: "bottom", duration: 1250, distance: "100px", easing: "ease-out"});
    sr.reveal(".about h2", {origin: "bottom", duration: 750, distance: "50px", easing: "ease-out", reset: false});
    sr.reveal(".about p", {origin: "bottom", duration: 750, delay: 250, distance: "50px", easing: "ease-out"});
})();