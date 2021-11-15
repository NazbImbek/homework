// Задание 1

"use strict"

function getArrayParams(arr) {
  let max = -Infinity;
  let min = Infinity;
  let avg = 0; 
  let sum = 0;

  for (let i = 0; i < arr.length; i+=1) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = parseFloat((sum / arr.length).toFixed(2));

  return {min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    let sumOfArr = func(arrOfArr[i]);

    if (sumOfArr > max) {
      max = sumOfArr;
    }
  }
  return max;
}

// Задание 3

function worker2(arr) {

  let max = -Infinity;
  let min = Infinity; 
  let diff = 0;

  for (let i = 0; i < arr.length; i+=1) {
    diff += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
}
