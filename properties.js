const boll = {
    color: 'black',
    shape: 'curcle',
    price: 150,
    iscleaned: true

}

//keys
//একসাথে যদি প্রোপাইটির নাম দেখতে চাই। 
// const keys = Object.keys(boll)
// console.log(keys);

//value নাম দেখতে চাই।
const values = Object.values(boll);
// console.log(values);

//যদি value সম্পূর্ণ দেখতে চাই 
const pair = Object.entries(boll)
// console.log(pair);

// Object.seal(boll)   //চেঞ্জ করতে হলে  এইটা লাগবে। 


// যদি চেঞ্চ করতে চাই
// boll.price = 200;
// console.log(boll);

// // যদি ডিলেট করতে চাই
// delete boll.iscleaned;
// console.log(boll);


//freeze করে দেখলে অামাদের {  } এই চিহ্ন দিবে। 
// Object.freeze(boll)
// boll.price = 500;
// delete boll.shape
// console.log(boll);


// for in loop 
const bolls = {
    color: 'black',
    shape: 'curcle',
    price: 150,
    iscleaned: true

}

for (const boll in bolls) {
    // console.log(boll, bolls[boll]);
}


const keys = Object.keys(bolls);
// console.log(keys);
for (const key of keys) {
    // console.log(key, bolls[keys]);
}

const entries = Object.entries(bolls)
// console.log(entries);
for (const )