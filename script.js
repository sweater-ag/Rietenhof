gsap.registerPlugin(ScrollTrigger);
// const horizontalSections = gsap.utils.toArray(".gallery-grid");
const galleries = document.querySelectorAll(".container-gallery");
// const scrollableText = document.querySelector(".scrollable-text");
const heroImage = document.querySelector(".hero-image");
const dropdown = document.querySelector('.dropdown');
const dropdowncontent = document.querySelector('.dropdown-content');
const fadedBackground = document.querySelector('.faded-background');



const stallionParallaxDesktop = () => {
    gsap.to(heroImage, {
        y: 80,
        scrollTrigger: {
            trigger: heroImage,
            start: "top top",
            scrub: true,
            end: "+=60%",
        }
    });
}

const stallionParallaxMobile = () => {
    gsap.to(heroImage, {
        y: 30,
        scrollTrigger: {
            trigger: "header",
            start: "top top",
            scrub: true,
            end: "+=60%",
        }
    });
};

const StallionParallax = () => {
    if (window.innerWidth > 576) {
        stallionParallaxDesktop();
    } else {
        stallionParallaxMobile();
    }
};

const createDotsForGallery = (gallery) => {
    const panels = gallery.querySelectorAll(".panel");
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots-container");
    gallery.after(dotsContainer);

    panels.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    });

    return { dotsContainer, panels };
};

const updateDots = (gallery, dots, panels) => {
    const scrollLeft = gallery.scrollLeft;
    const panelWidth = panels[0].offsetWidth;
    const index = Math.round(scrollLeft / panelWidth);

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
};

const enableDotNavigation = (gallery, dots, panels) => {
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            gallery.scrollTo({
                left: index * panels[0].offsetWidth,
                behavior: "smooth",
            });
        });
    });
};

const galleryDots = () => {
    galleries.forEach((gallery) => {
        const { dotsContainer, panels } = createDotsForGallery(gallery);
        const dots = dotsContainer.querySelectorAll(".dot");
        gallery.addEventListener("scroll", () => updateDots(gallery, dots, panels));
        enableDotNavigation(gallery, dots, panels);
    });
};


const init = () => {
    StallionParallax();
    galleryDots();
};

init();