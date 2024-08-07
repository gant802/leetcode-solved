function mergeSort(array) {
    if (array.length === 1) {
      return array;
    }
    
    // Split Array into right and left
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    );
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate the remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

  const answer = mergeSort(numbers);
  console.log(answer);

