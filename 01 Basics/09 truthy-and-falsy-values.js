// Falsy Values: undefined, null, 0, '', NaN
if (undefined || null || 0 || '' || NaN) {
    console.log('This is Truthy');
}
else {
    console.log('This is Falsy');
}


// [Coercion]
var a = 10 + "10";      // 1010
var b = "10" + 10;      // 1010
var c = "10" + "10";    // 1010

console.log(`
    Value of First Coercion is      :   ${a}
    Value of Second Coercion is     :   ${b}
    Value of Third Coercion is      :   ${c}
`);