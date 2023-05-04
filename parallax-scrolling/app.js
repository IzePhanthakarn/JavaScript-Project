function onScroll() {
    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');

    moonElem.style.transform = `translate(${window.scrollY * 0.5}%, ${window.scrollY * -0.48}%)`;
    wishElem.style.transform = `translateY(${window.scrollY * -1.45}%`;
}

function run() {
    document.addEventListener('scroll', onScroll)
}

run()