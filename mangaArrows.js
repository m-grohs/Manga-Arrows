'use strict';

const BASE_URL = window.location.origin;
const BASE_PATH = window.location.pathname;
let prevSrc, nextSrc;

// Get the Source Class of the Prev/Next Button
// BASE_URL for unique sites, BASE_PATH for generic themes sites
if (BASE_PATH.includes('/comics/')) {
    prevSrc = '.fa-arrow-left';
    nextSrc = '.fa-arrow-right';
} else if (BASE_URL.includes('manganato')) {
    prevSrc = '.navi-change-chapter-btn-prev';
    nextSrc = '.navi-change-chapter-btn-next';
} else if (BASE_URL.includes('webtoon')) {
    prevSrc = '.pg_prev';
    nextSrc = '.pg_next';
} else if (BASE_URL.includes('asurascans')) {
    prevSrc = '.ch-prev-btn';
    nextSrc = '.ch-next-btn';
}

// Check if Vars are set and process left/right arrow
if (prevSrc && nextSrc) {
    document.addEventListener('keydown', (event) => {
        // go previous chapter with left arrow
        if (event.key === 'ArrowLeft') {
            window.location.href =
                document.querySelector(prevSrc).href || document.querySelector(prevSrc).parentElement.href;
        }

        // go next chapter with right arrow
        if (event.key === 'ArrowRight') {
            window.location.href =
                document.querySelector(nextSrc).href || document.querySelector(nextSrc).parentElement.href;
        }
    });
}
