// 1. What is the Big O for this?
// 1.1 constant - O(1) 
// 1.2 linier - O(n)

// 2. Even or odd
function isEven(value) {
  if (value % 2 == 0) { // O(1)
      return true;      // constant because value can never be greater than 1
  }                     // index
  else{
      return false;
  }
}

// 2. Are you here?
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {     
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

// O(n^2)
// arr2 is accessed for every index in arr1

//4. Doubler
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

// O(n)
// Standard iterater. 

// 5. Naive Search
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

// O(n)
// 

//6. creating pairs
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

// O(n^2)
// iteretes through every item in arr twice

// 7. Compute the sequence 
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i == 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

// Its the fibonoci sequence
// O(n)
// Only iterates through array once


// .8 An efficient Search
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

// O(log(n))
// Because you are cuting the while loop to only iterate 
// until it hits specific paramiters.


// 9. Random element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// O(1)
// will allways output a random index


// 10. What Am I?
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}
// Looking for prime numbers 
// O(n) 

// 11. Tower of Hanoi

function towerOfHanoi(disks, start, dest, temp){
    if(disks >= 1){
        towerOfHanoi(disks-1, start, temp, dest);
        console.log(`disk from ${start} to ${dest}`);
        towerOfHanoi(disks-1, temp, dest, start);
    }
return;
}
//  O(n) 

towerOfHanoi(4, "1", "3", "2");



