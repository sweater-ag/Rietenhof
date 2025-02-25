
gsap.registerPlugin(ScrollTrigger);
gsap.set(".picture", { opacity: 1, x: 1100 });


gsap.to(".picture", {
    scrollTrigger: {
        trigger: ".gallery",
        start: "top top",
        end: "bottom 50%",
        markers: true,
        pin: true,
        pinSpacing: false,
        scrub:true
    },
    // opacity: 0,
    x: 0,
    ease: "power2.inOut",
    // stagger: {
    //     each: 0.8,
    // },
    stagger: 1.2,
});