function dispArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + "");
    if (i % 10 == 9) {
      console.log("\n");
    }
  }
  if (i % 10 != 0) {
    console.log("\n");
  }
}

var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = Math.floor(Math.random() * 101);
}

dispArr(nums);

function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
var minValue = findMin(nums);
dispArr(nums);
console.log();
console.log("The minimum value is : " + minValue);

function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

var maxValue = findMax(nums);
dispArr(nums);
console.log();
console.log("The maximum value is : " + maxValue);
