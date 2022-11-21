'use strict';

const BASE_URL = window.location.origin;
const BASE_PATH = window.location.pathname;
const SITE_ARRAY = ['https://www.asurascans.com', 'https://asura.gg', 'https://luminousscans.com'];

let prevSrc, nextSrc, prevHref, nextHref;

// Get the Source Class of the Prev/Next Button
// Using a Site Array for Generic Sites that use a Generic Theme
if (SITE_ARRAY.includes(BASE_URL)) {
    prevSrc = '.ch-prev-btn';
    nextSrc = '.ch-next-btn';
}

// BASE_URL for unique sites, BASE_PATH for generic themes sites
if (BASE_PATH.includes('/comics/')) {
    prevSrc = '.fa-arrow-left';
    nextSrc = '.fa-arrow-right';
}

if (BASE_URL.includes('manganato') || BASE_URL.includes('chapmanganato')) {
    console.log('######################################## >>>>>>>>>>>>>>>');
    prevSrc = '.navi-change-chapter-btn-prev';
    nextSrc = '.navi-change-chapter-btn-next';
}

if (BASE_URL.includes('webtoon')) {
    prevSrc = '.pg_prev';
    nextSrc = '.pg_next';
}

// This is atm a special Case as ReaperScans switched to a new Desing with Tailwind and has no more
// any prev/next button indicators except the textContent of "Previous" or "Next"!
// Workaround for this works atm but should be Refactored at some Point.
if (BASE_URL.includes('reaperscans')) {
    const anchorNodes = document.querySelectorAll('a');

    for (const anchor of anchorNodes) {
        if (anchor.textContent.includes('Previous')) {
            prevHref = anchor.href;
        }
        if (anchor.textContent.includes('Next')) {
            nextHref = anchor.href;
        }
    }
}

// Check if Variables are set and process left/right arrow Input for Navigation between Chapters!
if ((prevSrc && nextSrc) || (prevHref && nextHref)) {
    document.addEventListener('keydown', (event) => {
        // previous Chapter with left Arrow
        if (event.key === 'ArrowLeft') {
            window.location.href =
                prevHref || document.querySelector(prevSrc).href || document.querySelector(prevSrc).parentElement.href;
        }

        // next Chapter with right Arrow
        if (event.key === 'ArrowRight') {
            window.location.href =
                nextHref || document.querySelector(nextSrc).href || document.querySelector(nextSrc).parentElement.href;
        }
    });
}
