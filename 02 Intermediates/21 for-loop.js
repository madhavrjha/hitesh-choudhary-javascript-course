var states = [
    "Assam",
    "Gujrat",
    "Bihar",
    "Uttar Pradesh",
    "Rajasthan",
    1947,
    true,
    "Maharashtra",
    "Tamilnadu",
    "Kashmir"
];

for (let i = 0; i < states.length; i++) {
    console.log(states[i]);
}


// Using Continue
for (let i = 0; i < states.length; i++) {
    if (typeof states[i] !== 'string') continue;
    console.log(states[i]);
}

// Using Break
for (let i = 0; i < states.length; i++) {
    if (typeof states[i] !== 'string') break;
    console.log(states[i]);
}