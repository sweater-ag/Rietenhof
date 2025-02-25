
 document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to( ".gallery-section", { //images
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".gallery-section",
            start: "top top ",
            end: "+=100%", //takes 100 of a trigger ig 
            markers: true,
            scrub: true,
            pin: ".gallery",
        },
     });
});



