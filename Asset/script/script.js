gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();


tl.from('.heading-jumbo', {opacity:0, duration:1,ease:"sine"});
tl.from('.header-paragraph', {opacity: 0 ,x: -200, duration:1,ease:"sine"});
tl.from('.header-link', {opacity: 0 ,y: -20,ease:"sine"});


let toolMan = gsap.timeline();
ScrollTrigger.create({
    animation: toolMan,
    trigger: ".header-gallery__img",
    start: "top top",
    end: "2200 100%",
    scrub: 1,
});

//sun motion 
toolMan.to(".svg", { x: 120}, 0.00)