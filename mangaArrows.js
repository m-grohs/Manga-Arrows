'use strict';

const baseURL = window.location.origin;
let prevURL, nextURL;

if (
    baseURL.includes('leviatanscans') ||
    baseURL.includes('zeroscans') ||
    baseURL.includes('reaperscans')
) {
    prevURL = document.querySelector('.fa-arrow-left').parentElement.href;
    nextURL = document.querySelector('.fa-arrow-right').parentElement.href;
} else if (baseURL.includes('manganelo')) {
    prevURL = document.querySelector('.navi-change-chapter-btn-prev').href;
    nextURL = document.querySelector('.navi-change-chapter-btn-next').href;
} else if (baseURL.includes('webtoon')) {
    prevURL = document.querySelector('.pg_prev').href;
    nextURL = document.querySelector('.pg_next').href;
}

document.addEventListener('keydown', (e) => {
    // go previous chapter with left arrow
    if (e.keyCode === 37) {
        window.location.href = prevURL;
    }
    // go next chapter with right arrow
    if (e.keyCode === 39) {
        window.location.href = nextURL;
    }
});
