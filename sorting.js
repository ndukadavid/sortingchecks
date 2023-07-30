function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      // Store the current element to be inserted
      let currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than the current element
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element in its correct position
      arr[j + 1] = currentElement;
    }
  }
  
  // Example usage:
  const myArray = [64, 34, 25, 12, 22, 11, 90];
  insertionSort(myArray);
  console.log(myArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  