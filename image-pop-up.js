import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

const leftArrowSVGString = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="32" viewBox="0 0 75 32" fill="none">
<rect x="74.043" y="31" width="73.0435" height="30" rx="15" transform="rotate(-180 74.043 31)" fill="#FBD784" stroke="black" stroke-width="0.782609"/>
<path d="M60.4785 16.2609C60.6946 16.2609 60.8698 16.0857 60.8698 15.8696C60.8698 15.6535 60.6946 15.4783 60.4785 15.4783L60.4785 16.2609ZM14.2888 15.5929C14.136 15.7457 14.136 15.9934 14.2888 16.1462L16.779 18.6365C16.9318 18.7893 17.1796 18.7893 17.3324 18.6365C17.4852 18.4837 17.4852 18.2359 17.3324 18.0831L15.1189 15.8696L17.3324 13.656C17.4852 13.5032 17.4852 13.2554 17.3324 13.1026C17.1796 12.9498 16.9318 12.9498 16.779 13.1026L14.2888 15.5929ZM60.4785 15.4783L14.5655 15.4783L14.5655 16.2609L60.4785 16.2609L60.4785 15.4783Z" fill="black"/>
</svg>`;
const rightArrowSVGString = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="32" viewBox="0 0 75 32" fill="none">
<rect x="74.043" y="31" width="73.0435" height="30" rx="15" transform="rotate(-180 74.043 31)" fill="#FBD784" stroke="black" stroke-width="0.782609"/>
<path d="M60.7552 16.1463C60.908 15.9934 60.908 15.7457 60.7552 15.5929L58.265 13.1026C58.1122 12.9498 57.8644 12.9498 57.7116 13.1026C57.5588 13.2554 57.5588 13.5032 57.7116 13.656L59.9251 15.8696L57.7116 18.0831C57.5588 18.2359 57.5588 18.4837 57.7116 18.6365C57.8644 18.7893 58.1121 18.7893 58.265 18.6365L60.7552 16.1463ZM14.5655 15.4783C14.3494 15.4783 14.1742 15.6534 14.1742 15.8696C14.1742 16.0857 14.3494 16.2609 14.5655 16.2609L14.5655 15.4783ZM60.4785 15.4783L14.5655 15.4783L14.5655 16.2609L60.4785 16.2609L60.4785 15.4783Z" fill="black"/>
</svg>`

const closeSVGString = `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
  <rect width="43" height="43" rx="20.5768" fill="#FBD784"/>
  <path d="M14 14L28.0253 28.0253" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <path d="M28.0254 14L14.0001 28.0253" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>`
const options = {
    arrowPrevSVG: leftArrowSVGString,
    arrowNextSVG: rightArrowSVGString,
    closeSVG: closeSVGString,
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe'),
}
const links = document.querySelectorAll('.container-gallery a');
const lightbox = new PhotoSwipeLightbox(options);

lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector('.photo-credit');
          if (hiddenCaption) {
            // get caption from element with class hidden-caption-content
            captionHTML = hiddenCaption.innerHTML;
          } else {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
          }
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});

if (window.innerWidth > 576) {
    lightbox.init();
}

if (window.innerWidth < 576) {
    console.log("The screen width is less than 576px");
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
}

console.log("Hello from image-pop-up.js");