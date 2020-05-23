'use strict';

const baseURL = window.location.origin;
let prevSrc, nextSrc;

// Get the Source Class of the Prev/Next Button
if (baseURL.includes('leviatanscans') || baseURL.includes('zeroscans') || baseURL.includes('reaperscans')) {
    prevSrc = '.fa-arrow-left';
    nextSrc = '.fa-arrow-right';
} else if (baseURL.includes('manganelo')) {
    prevSrc = '.navi-change-chapter-btn-prev';
    nextSrc = '.navi-change-chapter-btn-next';
} else if (baseURL.includes('webtoon')) {
    prevSrc = '.pg_prev';
    nextSrc = '.pg_next';
}

document.addEventListener('keydown', (e) => {
    // go previous chapter with left arrow
    if (e.keyCode === 37) {
        window.location.href =
            document.querySelector(prevSrc).href || document.querySelector(prevSrc).parentElement.href;
    }
    // go next chapter with right arrow
    if (e.keyCode === 39) {
        window.location.href =
            document.querySelector(nextSrc).href || document.querySelector(nextSrc).parentElement.href;
    }
});
