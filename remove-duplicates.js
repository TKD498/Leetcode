/**
 * Thought Process:
 *
 * check if the next num in the array is the same as the current num,
 * if so delete the current num from the array and subtract 1 from i
 *
 * Took 54 ms to run, currently runs in O(n^2)
 *
 */
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    } else {
      k++;
    }
  }
  return k;
};

console.log(removeDuplicates(nums));
console.log(nums);
