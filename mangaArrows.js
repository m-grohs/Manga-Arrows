'use strict';

const BASE_URL = window.location.origin;
const BASE_PATH = window.location.pathname;
let prevSrc, nextSrc;

// Get the Source Class of the Prev/Next Button
// BASE_URL for unique sites, BASE_PATH for generic themes sites
if (BASE_PATH.includes('/comics/')) {
    prevSrc = '.fa-arrow-left';
    nextSrc = '.fa-arrow-right';
} else if (BASE_URL.includes('manganelo')) {
    prevSrc = '.navi-change-chapter-btn-prev';
    nextSrc = '.navi-change-chapter-btn-next';
} else if (BASE_URL.includes('webtoon')) {
    prevSrc = '.pg_prev';
    nextSrc = '.pg_next';
}

// Check if Vars are set and process left/right arrow
if (prevSrc && nextSrc) {
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
}
