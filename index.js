// last elements in the array
const arr1= [3, 7, 34, 90,12];
const arr2 = [true, "green", "where", 12,56];
const lastElementArr1 = arr1[arr1.length -1];
const lastElementArr2 = arr2[arr2.length -1];

console.log(lastElementArr1);
console.log(lastElementArr2);
// join array
const myPets = ["cow", "bird","snake", "Dog"];
const petString = myPets.join(', ');
console.log(petString);
// sort array
var arr3 =[-5, 9, 5, 3, 2,-3, 6, 8, 4,1];
arr3.sort((a, b)=> a-b);
console.log(arr3);
// remove duplicates
let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
const newArray = [...new Set(arr)];
console.log({newArray});
//search word in array
let arr5 = ["the", "way", "x", 4];
const searchWord = "food";
const found = arr5.includes(searchWord) ? searchWord : "the search word was not found";

console.log(found);

// sort 
let word = "renniw"
const  sortedWord=word.split('').sort().join('');
console.log(sortedWord);
//   insert 'Tomato' at the 5th index
let fruits=["kiwi", "grapes", "orange", "banana", "passion"];
fruits[4] ='Tomato';
console.log(fruits);