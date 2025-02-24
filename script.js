// // // Wait for DOM to load

// // const galleryWrapper = document.querySelector(".gallery-wrapper");
//  document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);

//     const pictureHeight = document.querySelector(".picture").clientHeight;
//     const picture = document.querySelectorAll(".picture");
//     // const galleryEnd = THE last child' bottom in gallery section 
//     const galleryEnd = document.querySelector(".gallery-wrapper").clientHeight - picture;
//     console.log(galleryEnd);

//     gsap.to( ".horse-1", {
//         scrollTrigger: {
//             trigger: ".horse-1",
//             start: "top top ",
//             end: "bottom top",
//             markers: true,
//             scrub: true,
//             pin: ".gallery-wrapper",
//         },
//         y: (index) => - pictureHeight * (index + 1), // Move each picture up sequentially
//         stagger: -0.2,
//      });
//     });

