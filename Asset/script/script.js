gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();

tl.from('.heading-jumbo', {opacity:0, x: -200, duration:1,ease:"sine"})
tl.from('.header-card__title', {opacity:0, x: -200, duration: .7,ease:"back"})
tl.from('.header-card__paragraph, .heading-card__list, .pledge-card', {opacity:0,ease:"none", stagger:0.15})

gsap.to( ".service-card", {
    scrollTrigger: {
        trigger: ".service-card",
        start:"centre, center",
        scrub: 'true',
        toggleActions: "restart pause reverse pause"
    }, duration: 1.5, scale: 1 , ease: "bounce"
}, 
'-=2'
)
gsap.to( ".team-img", {
    scrollTrigger: {
        trigger: ".team",
        start:"centre, center",
        scrub: 'true',
        toggleActions: "restart pause reverse pause"
    }, duration: .5, x: 80 , ease: "bounce"
}, 
'-=2'
)