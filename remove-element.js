/**
 * Thought Process:
 *
 * okay so going through the array, collected data on where
 * the val values are in the array, then create a for loop
 * that deletes whatever is in those spots in the array,
 * everytime I delete an item track a index variable that holds
 * the number of deleted items so that when I delete an item from
 * the array the positions I original tracked will be out
 *
 * So actually I can just use filter, duhhh
 *
 * nevermind filter() creates a new array, it doesn't modify the current array
 *
 * It works in O(n^2) time, thought it was O(1) time but I was wrong
 */
(nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2);

var removeElement = function (nums, val) {
  k = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    } else {
      k++;
    }
  }
  return k;
};

removeElement(nums, val);
