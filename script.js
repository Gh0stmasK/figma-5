
// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".menu");

const parentElement = document.getElementById('p-cont');
const elementToRemove1 = document.getElementById('navitems-1');
const elementToRemove2 = document.getElementById('navitems-2');
const mButton = document.getElementById('ham-btn');
const mediaQuery = window.matchMedia('(max-width: 799px)');

// hamburger.addEventListener("click", () => {
//     menu.classList.toggle("active");
// });

function handleMediaQueryChange(e) {
    if (e.matches) {
        if (elementToRemove1 && elementToRemove1.parentNode) {
            elementToRemove1.remove();
            elementToRemove2.remove();
            parentElement.appendChild(mButton);
            console.log('Element removed.');
        }
    } else {
        parentElement.appendChild(elementToRemove1);
        parentElement.appendChild(elementToRemove2);
        mButton.remove();
        console.log('Element not removed (or re-added if logic for that exists).');
    }
}

// Initial check when the page loads
handleMediaQueryChange(mediaQuery);

// Listen for changes in the media query
mediaQuery.addListener(handleMediaQueryChange);