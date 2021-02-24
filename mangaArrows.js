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
} else if (BASE_URL.includes('asurascans.com')) {
    prevSrc = '.ch-prev-btn';
    nextSrc = '.ch-next-btn';
}

if (prevSrc && nextSrc) {
    // Check if Vars are set and process left/right arrow
    document.addEventListener('keydown', (event) => {
        // go previous chapter with left arrow
        console.log(event.key);
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
