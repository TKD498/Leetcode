(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);

var merge = function (array1, m, array2, n) {
  let nums1Index = -1;
  array2.forEach((nums2Number) => {
    nums1Index = -1;
    for (const nums1Number of array1) {
      nums1Index += 1;
      if (
        nums2Number >= nums1Number &&
        (nums2Number <= array1[nums1Index + 1] || array1[nums1Index + 1] === 0)
      ) {
        array1.splice(nums1Index + 1, 0, nums2Number);
        array1.pop();
        break;
      }
    }
  });
  nums1 = array1;
};

merge(nums1, m, nums2, n);
console.log(nums1);
