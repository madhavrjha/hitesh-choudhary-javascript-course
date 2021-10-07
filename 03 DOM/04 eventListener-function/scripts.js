const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

const center = document.querySelector('.center');

// console.log(window.getComputedStyle(red).backgroundColor);

function getBGColor (selectedElement) {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// console.log(getBGColor(red));
// console.log(getBGColor(cyan));
// console.log(getBGColor(violet));
// console.log(getBGColor(orange));
// console.log(getBGColor(pink));


function magicColorChanger (element) {
  element.addEventListener('mouseenter', () => {
    center.style.backgroundColor = getBGColor(element);
  });
}

// red.addEventListener ('mouseenter', () => {
//   center.style.backgroundColor = getBGColor(red);
// });

magicColorChanger(red);
magicColorChanger(cyan);
magicColorChanger(violet);
magicColorChanger(pink);
magicColorChanger(orange);