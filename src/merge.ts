/**
 * Merge three sorted arrays:
 *  - collection_1 (ascending)
 *  - collection_2 (descending)
 *  - collection_3 (ascending)
 *
 * Returns one merged array in ascending order without using built-in sort.
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Reverse collection_2 since it is descending
  const col2Asc = reverse(collection_2);

  // Merge all three arrays using two-way merge step repeatedly
  const merged12 = mergeTwo(collection_1, col2Asc);
  return mergeTwo(merged12, collection_3);
}

/**
 * Merge two ascending arrays into one ascending array
 */
function mergeTwo(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

/**
 * Reverse an array manually (without using built-in reverse)
 */
function reverse(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
