((nums = [3, 3, 4]), (nums1 = [2, 2, 1, 1, 1, 2, 2]));

var majorityElement = function (nums) {
  let numbersCount = {};

  for (const num of nums) {
    if (!numbersCount[num]) {
      //if variable does not exist, create it
      numbersCount[num] = 1;
    } else {
      //if variable exists, increment it
      numbersCount[num] += 1;
    }
  }

  let majorityNumber = 0;
  let highestCount = 0;
  for (const element in numbersCount) {
    if (numbersCount[element] > highestCount) {
      highestCount = numbersCount[element];
      majorityNumber = element;
    }
  }
  return Number(majorityNumber);
};

console.log(majorityElement(nums));
