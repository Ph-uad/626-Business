gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();

tl.from('.heading-jumbo', {opacity:0, x: -200, duration:1,ease:"sine"})

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
    }, duration: .5,scale: .5, x: 80 , ease: "bounce"
}, 
'-=2'
)
gsap.to( ".header-hero", {
    scrollTrigger: {
        trigger: "body",
        start:"top, top",
        scrub: '2',
        end :"bottom bottom",
        toggleActions: "restart pause reverse pause"
    }, duration: .5, y: 2000 , ease: "bounce"
}, 
'-=2'
)