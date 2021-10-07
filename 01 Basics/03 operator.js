
// Getting Product Info
var cumDiscountPrice = 6999;
var exDiscountPrice = 4999;

// Check Validity of Discount
var hasDiscount = (exDiscountPrice < cumDiscountPrice);

// Calculating Discount Percentage
var discountPercentage = 100 - ((exDiscountPrice / cumDiscountPrice) * 100);
var printableDiscountPercentage = Math.round(discountPercentage) + "% OFF";

// Printing Info
console.log(`
    Price Before Discount   :   ${cumDiscountPrice}
    Price After Discount    :   ${exDiscountPrice}

    Discount Percentage     :   ${printableDiscountPercentage}
`);