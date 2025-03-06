gsap.registerPlugin(ScrollTrigger);

const horizontalSections = gsap.utils.toArray(".gallery-grid");
const panels = gsap.utils.toArray(".panel");
const galleries = document.querySelectorAll(".container-gallery");
const scrollableText = document.querySelector(".scrollable-text");
const heroImage = document.querySelector(".hero-image");

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
                end: "+=5000",
            }
        });


        // gsap.to(sections, {
        //     opacity: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: sections[0],
        //         pin: true,
        //         scrub: 1,
        //         end: "+=3500",
        //     }
        // });
        
    });


    stallionParallaxDesktop();

};


    // gsap.utils.toArray(".panel")?.forEach((panel, i) => {
    //     let scroll_TL = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: panel,
    //             markers: true,
    //             start: "top top",
    //             // end:"200%",
    //             pin: true,
    //             pinSpacing: false,
    //             scrub: 1,
    //             snap: 1,
    //         }
    //     });

    //     scroll_TL.fromTo(
    //         panel,
    //         { opacity: 0, y: 5, zIndex: -1 },
    //         { duration: 0.8, opacity: 1, y: 0, zIndex: 1 }
    //     );
    // });
// const targetPanel = panels[1];

// setInterval(() => {
//     console.log("Left Position:", targetPanel.getBoundingClientRect().left);
//     console.log("Opacity:", targetPanel.style.opacity);
// }, 2000);

// gsap.to(targetPanel, {
//     opacity: 1,  // Fade in
//     duration: 1,
//     scrollTrigger: {
//         trigger: targetPanel,
//         start: " center center",
//         end: "center 40%",
//         toggleActions: "play none none reverse",
//         markers: true, // Debug markers (remove when done)
//         horizontal: true, // Ensure it applies to horizontal scroll
//         scroller: ".container-gallery", // Ensure correct scrolling container

//     }
// });





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

const mobileAnimation = () => {
    galleries.forEach((gallery) => {
        const { dotsContainer, panels } = createDotsForGallery(gallery);
        const dots = dotsContainer.querySelectorAll(".dot");
        gallery.addEventListener("scroll", () => updateDots(gallery, dots, panels));
        enableDotNavigation(gallery, dots, panels);
    });

    stallionParallaxMobile();
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