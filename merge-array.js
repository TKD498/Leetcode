(nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1);

var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    nums1.splice(-n);
    nums2.forEach((nums2Number) => {
      nums1.push(nums2Number);
    });
    return;
  } else if (n === 0) {
    return;
  } else {
    nums1.splice(-n);

    nums2.forEach((element) => {
      nums1.push(element);
    });

    nums1.sort((a, b) => a - b);
  }
};

merge(nums1, m, nums2, n);
console.log(nums1);
