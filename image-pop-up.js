const pictures = document.querySelectorAll('.picture');

pictures.forEach((picture) => {
    //on click open the image in a new tab 
    picture.addEventListener('click', () => {
        window.open(picture.src);
    }
    )});