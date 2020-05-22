'use strict';

const baseURL = window.location.origin;
let prevURL, nextURL;

if (baseURL.includes('leviatanscans') || baseURL.includes('zeroscans')) {
    prevURL = document
        .querySelector('.fa-arrow-left')
        .parentElement.getAttribute('href');
    nextURL = document
        .querySelector('.fa-arrow-right')
        .parentElement.getAttribute('href');
} else if (baseURL.includes('manganelo')) {
    prevURL = document
        .querySelector('.navi-change-chapter-btn-prev')
        .getAttribute('href');
    nextURL = document
        .querySelector('.navi-change-chapter-btn-next')
        .getAttribute('href');
} else if (baseURL.includes('webtoon')) {
    prevURL = document.querySelector('.pg_prev').getAttribute('href');
    nextURL = document.querySelector('.pg_next').getAttribute('href');
}

document.addEventListener('keydown', (e) => {
    // go previous chapter
    if (e.keyCode === 37) {
        window.location.href = prevURL;
    }
    // go next chapter
    if (e.keyCode === 39) {
        window.location.href = nextURL;
    }
});
