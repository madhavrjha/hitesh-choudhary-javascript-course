var counter = document.querySelector('.counter');
var followers = document.querySelector('.followers');

let count = 0;

window.setInterval(() => {
    if (count <= 1000) {
        counter.innerText = count;
        count++;
    }
}, 1);

window.setTimeout(() => {
    followers.innerText = 'Followers on Instagram';
}, 5300);