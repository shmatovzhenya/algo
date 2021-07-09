const Merge = (left, right) => {
  const result = [...Array(left.length * 2)];
  let i = 0;
  let j = 0;

  console.log(left, right);
  for (let k = 0; k < result.length; k++) {
    // console.log(left[i], right[j]);
    if (i >= left.length) {
      result[k] = right[j];
      j++;
      continue;
    }

    if (j >= right.length) {
      result[k] = left[i];
      i++;
      continue;
    }

    if (left[i] < right[j]) {
      result[k] = left[i];
      i++;
    } else {
      result[k] = right[j];
      j++;
    }
  }
  // console.log(result, [...Array(left.length * 2)], result.length);
  return result;
};

const MergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const leftArray = MergeSort(arr.slice(0, arr.length / 2));
  const rightArray = MergeSort(arr.slice(arr.length / 2));

  return Merge(leftArray, rightArray);
};

const result = MergeSort([5, 4, 1, 8, 7, 2, 6, 3]);

console.log(result);
// console.log(Merge([5, 4, 1, 8], [7, 2, 6, 3]))
