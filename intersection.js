const array1 = [1, 8, 9, 8, 14];
const array2 = [2, 8];

let intersection = [];

for (let index = 0; index < array1.length; index++) {
  if (array2.includes(array1[index]) && !intersection.includes(array1[index])) {
    intersection.push(array1[index]);
  }
}

console.log(intersection, "intersection");
