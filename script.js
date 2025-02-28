
gsap.registerPlugin(ScrollTrigger);


// const windowWidth = window.innerWidth;
const images = document.querySelectorAll(".gallery-section .picture");
const barNumbers = document.querySelector(".bar-numbers");

const horses = {
    Hero: {
        title: "Hero van de Maaskanthoeve",
        description: "Maar liefst drie keer is Hero van de Maaskanthoeve kampioen geworden tijdens de Nederlandse centrale hengstenkeuring en dat in 2020, 2023 en nu recent in januari 2024 nogmaals, vlak voor zijn vertrek naar België.Verder werd Hero tijdens de Nationale tentoonstelling in 2023 nationaal derde op tal en werd hij in 2021 kampioen tijdens de JTPF keuring in Kronenberg.Een indrukwekkend palmares dat hij dankt aan zijn moderne type, veel rasuitstraling, hard beenwerk en bewegingen die hij brengt met veel allure, houding en ruimte.Zijn kwaliteit heeft hij echter niet van vreemden, want zijn beide ouders werden in Nederland nationaal kampioen: Siem van de Dekkershoef in 2016 en moeder Elsje van Grotel in 2014. die bovendien een dochter is van de goed verervende Lars van de Smidse ",
        properties: "Hero van de Maaskanthoeve Kampioen hengstenkeuring 2020, ‘23 en ‘24 °15-04 - 2016 • Bruinschimmel • 1,70m"
    },
    Jerom: {
        title: "Jerom van het Suikervoetpad",
        description: "description 2",
        properties: "Jerom van het Suikervoetpad Kampioen hengstenkeuring 2020, ‘23 en ‘24 °15-04 - 2016 • Bruinschimmel • 1,73m"
    },
    Finn: {
        title: "Finn van't Hengelhof",
        description: "description 3",
        properties: "Finn van't Hengelhof Kampioen hengstenkeuring 2020, ‘23 en ‘24 °15-04 - 2016 • Bruinschimmel • 1,73m"
    },
    Codex: {
        title: "Codex van Waardzicht",
        description: "description 4",
        properties: "Codex van Waardzicht Kampioen hengstenkeuring 2020, ‘23 en ‘24 °15-04 - 2016 • Bruinschimmel • 1,73m"
    },
    Sky: {
        title: "Sky van't Rietenhof van Vlaams-Brabant",
        description: "description 5",
        properties: "Sky van't Rietenhof van Vlaams-Brabant Kampioen hengstenkeuring 2020, ‘23 en ‘24 °15-04 - 2016 • Bruinschimmel • 1,73m"
    }
};

console.log(horses.Sky.properties); 

// const updateText = (title, progress) => {
//     console.log(title, progress);
// };


const desktopAnimation = () => {
    gsap.set(".picture:not(:first-child)", { x: window.innerWidth });

    let timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".gallery-wrapper",
            start: "top top",
            end: "bottom 10%",
            // markers: true,
            pin: true,
            scrub: true
        },
    })

    timeline.to(".picture:not(:first-child)", {
        x: 0,
        duration: 1,
        ease: "ease-in",
        stagger: 1.2,
    }, 1)
        .to(".picture:not(:last-child)", {
            opacity: 0,
            duration: 1,
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
                let index = Math.round(progress);
                if (images[index]) {
                updateText(index, progress);
                };
                let barPosition = (1 - progress) * maxShift;
                gsap.to(".bar", { bottom: `${barPosition}%`, duration: 0.1, ease: "none" });
            }
        }
    })

    barNumbers.innerHTML = "";
    images.forEach((_, index) => {
        let number = String(index + 1).padStart(2, "0");
        let numElement = document.createElement("p");
        numElement.textContent = number;
        barNumbers.appendChild(numElement);
    });
}

const mobileAnimation = () => {
    images.forEach((image) => {
        gsap.from(image, {
            opacity: 0,
            y: 5,
            // scale: 0.98,
            ease: "sine.out",
            // ease: "elastic.out(2,0.5)",
            // duration: 0.3,
            scrollTrigger: {
                trigger: image,
                start: "top 90%",
                end: "top top",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        });
    });
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
