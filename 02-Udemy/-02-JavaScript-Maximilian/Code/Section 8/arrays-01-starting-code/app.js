// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// const arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2);

// const arr3 = new Array(5);
// console.log(arr3);

// const arr4 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// for (data of arr4) {
//   for (num of data) {
//     console.log(num);
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// arr.pop();
// console.log(arr);
// arr.splice(2, 1);
// console.log(arr);
// arr.splice(2, 0, 3);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// arr.concat([6, 7, 8]);
// console.log(arr);
// console.log(arr.indexOf(3));
// console.log(arr.lastIndexOf(3));

// const prices = [100, 200, 300, 400, 500];
// const tax = 0.1;
// const taxPrices = [];

// // for (const price of prices) {
// //   taxPrices.push(price + price * tax);
// // }
// // console.log(taxPrices);

// prices.forEach((price, index, prices) => {
//   const priceObj = {
//     index: index,
//     taxIncludedPrice: price + price * tax,
//   };
//   taxPrices.push(priceObj);
// });
// console.log(taxPrices);

// const prices = [100, 200, 300, 400, 500];
// const tax = 0.1;

// const taxIncludedPrice = prices.map((price, index, prices) => {
//   const priceObj = {
//     index: index,
//     taxIncludedPrice: price + price * tax,
//   };
//   return priceObj;
// });
// console.log(prices, taxIncludedPrice);

// const arr = [10, 7, 16, 30, 14, 15];
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr);

// const arr = [10, 7, 16, 30, 14, 15];
// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(arr);

// const arr = [10, 7, 16, 30, 14, 15];
// const newArr = arr.map((el) => (el % 2 === 0 ? el : el * 2));
// console.log(newArr);

// const arr = [10, 7, 16, 30, 14, 15];
// const filteredArr = arr.filter((el) => el > 10 && el < 30);
// console.log(filteredArr);
