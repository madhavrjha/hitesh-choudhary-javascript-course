const uno = () => {
    return 'I am One';
};

// const dos = async () => {        // This will return undefined
//     setTimeout( () => {
//         return 'I am Two';
//     }, 3000);
// };

const dos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('I am Two');
        }, 3000);
    });
};

const tres = () => {
    return 'I am Three';
};


const callMe = async () => {
    console.log(uno());
    console.log(await dos()); 
    console.log(tres());
}

callMe();