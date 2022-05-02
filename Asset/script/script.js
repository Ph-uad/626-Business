// gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();

tl.from('.heading-jumbo', {opacity:0,scale: .3, y:-200, duration:1,ease:"sine"})
tl.from('.heading-quadruple', {opacity: 0 ,x: -200, duration:1,ease:"sine"})

