"use strict";
// /**************print numbers from 1 to 10 using for loop************************/
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
// let arr: number[] = [2, 1, 5, 8];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// /**************print numbers from 10 to 1 using for loop************************/
// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }
// let arr: number[] = [2, 1, 5, 8];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
// /**************print odd and even number using for loop************************/
// let arr:number[] = [13,23,12,45,22,48,66,100] 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i] + " is Even");
//     }
// }
// /**************delete all element in given array using for loop************************/
// let arr = [23,56,4,78,5,63,45,210,56];
// for( let i = 0; i < arr.length; i++){ 
//     arr.splice(0, arr.length);
//     console.log(arr);
// }
// /**************print pattern using for loop************************/
// let star = '';
// for (let i = 0; i <= 8; i++) {
//     for (let j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);
// let star = '';
// for (let i = 8; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);
// let x = '';
// for (let i = 1; i <= 8; i++) {
//     for (let j = 1; j <= i; j++) {
//         x += j;
//     }
//     x += "\n";
// }
// console.log(x);
// let x = '';
// for (let i = 8; i >= 1; i--) {
//     for (let j = 8; j >= i; j--) {
//         x += j;
//     }
//     x += "\n";
// }
// console.log(x);
// let x = '';
// for (let i = 8; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         x += j;
//     }
//     x += "\n";
// }
// console.log(x);
// /**************find the largest number in an array using for loop************************/
// let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
// let x = 0;
// for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] > x) {
//         x = arr[i];
//     }
// }
// console.log(x);
// /**************Practice while loop and do while loop************************/
// let i = 1;
// while (i <= 8) {
//     console.log(i)
//     i+=1
// }
// let i = 8;
// while (i >= 1) {
//     console.log(i)
//     i-=1
// }
// let i = 1;
// let x = '';
// while (i <= 8) {
//     x += '*';
//     console.log(x)
//     i+=1
// }
// let i = 1;
// let x = '';
// while (i <= 8) {
//     x += i;
//     console.log(x)
//     i += 1
// }
// let i = 4;
// do {
//     console.log(i)
//     i++;
// } while (i <= 10)
