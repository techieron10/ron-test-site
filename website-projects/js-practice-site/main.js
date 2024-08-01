const limit = {"limit":10};
const dbParam = JSON.stringify(limit);

console.log(dbParam);


/* MAP */

// let petMap = new Map([
//     ['ice', 5],
//     ['polar', 4],
//     ['winter', 3],
//     ['sol', 2]
// ]);

/* CONVERT MAP TO OBJECT and VICE VERSA */

// MAP TO OBJECT
// console.log(Object.fromEntries(petMap));

// //OBJEC TO MAP
// let pets = {
//     ice: 5,
//     polar: 4,
//     winter: 3,
//     sol: 2
// };

// let newPet = new Map(Object.entries(pets));

// console.log(newPet);

/* OUTPUT MAP */
// for(let petName of petMap.keys()){
//     console.log(petName);
// }

// for(let petAge of petMap.values()){
//     console.log(petAge);
// }

// for(let petAge of petMap){
//     console.log(petMap);
// }

// petMap.forEach((value, key, map) => {
//   console.log(value);      
// })








//**ARRAYS */
// const petAges = [100, 30, 68, 17, 79, 28];
// let ascPetAges = petAges.sort((a, b) => a-b);
// let descPetAges = petAges.sort((a, b) => b-a);

// petAges.forEach((value, index, array) => {
//     console.log(value);
// });

// for(let i in petAges){
//     console.log(petAges[i]);
// }

// for(let i of petAges){
//     console.log(i);
// }

// console.log(ascPetAges);
// console.log(descPetAges);
// console.log(getMax(petAges));
// console.log(getMin(petAges));
 

// function getMin(arr){
//     let len = arr.length;
//     let min = Infinity;
//     while(len--){
//         if(arr[len] < min){
//             min = arr[len];
//         }
//     }
//     return min;
// }

// function getMax(arr){
//     let len = arr.length;
//     let max = -Infinity;
//     while(len--){
//         if (arr[len] > max){
//             max = arr[len];
//         }
//     }
//     return max;
// }

// const myPets = [
//     "Polar",
//     "Ice",
//     "Winter",
//     "Sol",
//     "Luna"
// ];

// console.log(myPets.length);
// console.log(myPets.toString());
// console.log(myPets.join("*"));
// console.log(myPets.push("Luna"));
// console.log(myPets.pop());
// console.log(myPets.shift());
// console.log(myPets.unshift("Polar", "Cadiz", "Luna"));
// console.log(myPets);

// console.log(myPets.indexOf("Luna"));
// console.log(myPets.lastIndexOf("Luna"));
// console.log(myPets.includes("Polar"));
// console.log(myPets.sort());







// let catName = "Polar Bear";

// //Extract String Characters
// console.log(catName.length);
// console.log(catName.charAt(3)); 
// console.log(catName.charCodeAt(2));
// console.log(catName[6]);  


// //Extract String Parts
// console.log(catName.substring(1, 5));
// console.log(catName.substr(6, 10));
// console.log(catName.slice(6, 10));

// console.log(catName.)