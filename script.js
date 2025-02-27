
gsap.registerPlugin(ScrollTrigger);


const windowWidth = window.innerWidth;
const images = document.querySelectorAll(".gallery-section .picture");
const barNumbers = document.querySelector(".bar-numbers");


const desktopAnimation = () => {
gsap.set(".picture-scroll", { x: windowWidth });

let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".gallery-wrapper",
        start: "top top",
        end: "bottom 10%",
        markers: true,
        pin: true,
        // toggleActions: "play none reverse resume",
        scrub: true
    },
})

timeline.to(".picture:not(:first-child)", {
    // opacity: 1,
    duration: 1,
    x: 0,
    ease: "ease-in",
    stagger: 1.2,
 } ,1)
    .to(".picture:not(:last-child)", {
    opacity: 0,
    duration: 1,
    x: 0,
    ease: "ease-in",
    stagger: 1.2,
    }, 1);

gsap.to(".bar", {
    bottom: 0,
    scrollTrigger: {
        trigger: ".gallery-wrapper",
        start: "top top",
        end: "bottom 10%",
        scrub: true,
        onUpdate: (self) => {
            let progress = self.progress;
            let maxShift = 80; 
            let barPosition = (1-progress) * maxShift;
            gsap.to(".bar", { bottom: `${barPosition}%`, duration: 0.1, ease: "none" });
        }
    }
})




barNumbers.innerHTML = ""; // Clear previous content

images.forEach((_, index) => {
    let number = String(index + 1).padStart(2, "0"); // Convert to 01, 02, 03...
    let numElement = document.createElement("p");
    numElement.textContent = number;
    barNumbers.appendChild(numElement);
});
}

const mobileAnimation = () => { 
    console.log("Mobile animation");
}

const animate = () => {
    if(windowWidth > 576 ) {
        desktopAnimation();
    } else {
        mobileAnimation();
    }
}
const init = () => {
    animate();
}

init();
