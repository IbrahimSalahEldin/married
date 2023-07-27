const imgs = document.querySelectorAll(".animated_fade");
imgs.forEach((el) => {
    var elm_class_side = el.className;
    // console.log(el.classList.contains("animated_left_side"));
    // if (elm_class_side == "animated_left_side"){
    if (el.classList.contains("animated_left_side")){
        el.classList.add("loadin_left");
    }else if (el.classList.contains("animated_right_side")){
        el.classList.add("loadin_right");
    }else if (el.classList.contains("animated_right_side")){
        el.classList.add("loadin_top");
    }else if (el.classList.contains("animated_bottom_side")){
        el.classList.add("loadin_bottom");
    }else{
        el.classList.add("loadin_bottom");
    }
    // alert(elm_class_side);
});
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
};
function observerCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("loaded");
        }
        else {
            entry.target.classList.remove("loaded");
        }
    });
}
const observer = new IntersectionObserver(observerCallback, observerOptions);
imgs.forEach((el) => observer.observe(el));
