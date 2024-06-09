const FORMAT_KEY = '$';
const MARGIN = 0;
const STYLE_FORMAT = `calc(23.9% + ${FORMAT_KEY}px)`;
const SELECTED_CLASS = 'selected';
const SLIDING_CLASS = 'sliding';
const ANIMATION_DELAY = 800;

const round = document.querySelector('#round');
const phone = document.querySelector('#phone');

const isSelected = el => [...el.classList].find(c => c === SELECTED_CLASS);

const clearRoundAnimation = () => round.classList.remove(SLIDING_CLASS);

let selectedIcon = null;
const icons = [];

setTimeout(() => icons[3].click(), 1000);

[...document.querySelectorAll('.icon')].map(el => {
  if (!el) return;
  if (isSelected(el)) selectedIcon = el;
  icons.push(el);
  el.addEventListener('click', function() {
    const currentIndex = icons.indexOf(selectedIcon)
    const elIndex = icons.indexOf(el);

    if (elIndex < currentIndex -1
    || elIndex > currentIndex + 1) {
      // Is not a neighbour
      round.classList.add(SLIDING_CLASS);
      setTimeout(clearRoundAnimation, ANIMATION_DELAY);
    }

    const left = this.offsetLeft;
    
    round.style.left = STYLE_FORMAT.replace(FORMAT_KEY, left);
    selectedIcon.classList.remove(SELECTED_CLASS);
    el.classList.add(SELECTED_CLASS);
    selectedIcon = el;
  });
});