function returnToHome() {
    window.location.href = 'index.html';
}

function goBack() {
    history.back();
}

let currentIndex = 1;

function showCarouselItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    items.forEach((item, i) => {
        const pos = (i - index + totalItems) % totalItems;
        switch (pos) {
            case 0:
                item.style.transform = 'translateX(-300px) scale(0.8)';
                item.style.opacity = '0.8';
                item.style.zIndex = 2;
                item.onclick = () => moveCarousel(-1);
                break;
            case 1:
                item.style.transform = 'translateX(0px) scale(1)';
                item.style.opacity = '1';
                item.style.zIndex = 3;
                item.onclick = () => goTo(item.getAttribute('data-link'));
                break;
            case 2:
                item.style.transform = 'translateX(300px) scale(0.8)';
                item.style.opacity = '0.8';
                item.style.zIndex = 2;
                item.onclick = () => moveCarousel(1);
                break;
            default:
                item.style.transform = 'translateX(0px) scale(0.4)';
                item.style.opacity = '0.4';
                item.style.zIndex = 0;
                item.onclick = null;
                break;
        }
    });
}

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + direction + items.length) % items.length;
    showCarouselItem(currentIndex);
}

function goTo(url) {
    if (currentIndex === 1) {
        window.location.href = url;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    showCarouselItem(currentIndex);
});



// let currentIndex = 1;

// function showCarouselItem(index) {
//     const items = document.querySelectorAll('.carousel-item');
//     const totalItems = items.length;
//     items.forEach((item, i) => {
//         const pos = (i - index + totalItems) % totalItems;
//         switch (pos) {
//             case 0:
//                 item.style.transform = 'translateX(-300px) scale(0.8)';
//                 item.style.opacity = '0.8';
//                 item.style.zIndex = 2;
//                 item.onclick = () => moveCarousel(-1);
//                 break;
//             case 1:
//                 item.style.transform = 'translateX(0px) scale(1)';
//                 item.style.opacity = '1';
//                 item.style.zIndex = 3;
//                 item.onclick = () => goTo(item.getAttribute('onclick-link'));
//                 break;
//             case 2:
//                 item.style.transform = 'translateX(300px) scale(0.8)';
//                 item.style.opacity = '0.8';
//                 item.style.zIndex = 2;
//                 item.onclick = () => moveCarousel(1);
//                 break;
//             default:
//                 item.style.transform = 'translateX(0px) scale(0.4)';
//                 item.style.opacity = '0.4';
//                 item.style.zIndex = 0;
//                 item.onclick = null;
//                 break;
//         }
//     });
// }

// function moveCarousel(direction) {
//     const items = document.querySelectorAll('.carousel-item');
//     currentIndex = (currentIndex + direction + items.length) % items.length;
//     showCarouselItem(currentIndex);
// }

// function goTo(url) {
//     const items = document.querySelectorAll('.carousel-item');
//     if (items[currentIndex].style.zIndex == 3) {
//         window.location.href = url;
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const items = document.querySelectorAll('.carousel-item');
//     items.forEach((item, i) => {
//         item.setAttribute('onclick-link', item.getAttribute('onclick').split("'")[1]);
//     });
//     showCarouselItem(currentIndex);
// });
