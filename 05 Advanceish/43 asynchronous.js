const uno = function () {
    console.log('I am One');
};

const dos = function () {
    setTimeout(function () {
        console.log('I am Two');
    }, 3000);
};

const tres = function () {
    console.log('I am Three');
};

uno(); // Print One
dos(); // Wait for 3 Second  then Create Another Thread 
tres(); // Print Three