let currentIndex = 0;

function displatImage(imageElems, newIndex) {
    const lastIndex = imageElems.length - 1;
    if (newIndex < 0) {
        newIndex = lastIndex;
    }
    if (newIndex > lastIndex) {
        newIndex = 0;
    }

    const newImage = imageElems[newIndex];
    newImage.scrollIntoView({ behavior: 'smooth' });

    currentIndex = newIndex;
}

function run() {
    const imageElems = document.querySelectorAll('img');
    const previousElem = document.querySelector('.previous');
    const nextElem = document.querySelector('.next');

    previousElem.addEventListener('click', () => displatImage(imageElems, currentIndex - 1))
    nextElem.addEventListener('click', () => displatImage(imageElems, currentIndex + 1))
}

run();