gsap.registerPlugin(ScrollTrigger);

let horizontalSections = gsap.utils.toArray(".gallery-grid");

const desktopAnimation = () => {
horizontalSections.forEach((container) => {
    let sections = container.querySelectorAll(".panel");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
        }
    });
})
}

const mobileAnimation = () => {
    console.log("mobile");
}

const animate = () => {
    if (window.innerWidth > 576) {
        desktopAnimation();
    } else {
        mobileAnimation();
    }
}
const init = () => {
    animate();
}

init();

