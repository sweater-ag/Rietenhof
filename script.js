gsap.registerPlugin(ScrollTrigger);

const horizontalSections = gsap.utils.toArray(".gallery-grid");
const galleries = document.querySelectorAll(".container-gallery");
const scrollableText = document.querySelector(".scrollable-text");

const desktopAnimation = () => {
    horizontalSections.forEach((container) => {
        const sections = container.querySelectorAll(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: "+=3500",
            }
        });
        // gsap.to(scrollableText, {
        //     y: -300,
        //     // bottom: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: container,
        //         scrub: 1,
        //         end: "+=3500",
        //     }
        // });
    });

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

const mobileAnimation = () => {
    galleries.forEach((gallery) => {
        const { dotsContainer, panels } = createDotsForGallery(gallery);
        const dots = dotsContainer.querySelectorAll(".dot");

        gallery.addEventListener("scroll", () => updateDots(gallery, dots, panels));
        enableDotNavigation(gallery, dots, panels);
    });
};

const animate = () => {
    if (window.innerWidth > 576) {
        desktopAnimation();
    } else {
        mobileAnimation();
    }
};

const init = () => {
    animate();
};

init();