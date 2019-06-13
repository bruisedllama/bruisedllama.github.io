function changeSlideshow(num) {
    console.log("change slide " + num)
    var slides = $(".row, .slide");
    console.log(slides)
    var current = 0;
    for (var i =0; i<slides.length; i++) {
        if(slides[i].classList.contains("current")) {
            current = i;
        }
    }
    var next = current + num;
    if(next >= slides.length) {
        next = next-slides.length;
    }
    if(next < 0) {
        next = slides.length + next;
    }
    slides[current].classList.remove("current");
    slides[current].classList.add("hiddenSlide");
    slides[next].classList.add("current");
    slides[next].classList.remove("hiddenSlide");
}