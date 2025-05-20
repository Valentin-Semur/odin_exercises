// Sort the left half
// Sort the right half
// Merge them together

function mergeSort(arrayToSort) {
    const arrayLength = arrayToSort.length
    const arrayMiddle = Math.ceil(arrayLength / 2)

    if (arrayLength == 1) {
        return arrayToSort
    }

    // Sort left half
    let leftHalf = mergeSort(arrayToSort.slice(0, arrayMiddle))
    
    // Sort right half
    let rightHalf = mergeSort(arrayToSort.slice(arrayMiddle))

    // Merge the two together
    let sortedArray = [];
    while (leftHalf.length != 0 || rightHalf.length != 0) {
        if (leftHalf[0] >= rightHalf[0] || leftHalf.length == 0) {
            sortedArray.push(rightHalf.shift())
        } else if (leftHalf[0] < rightHalf[0] || rightHalf.length == 0) {
            sortedArray.push(leftHalf.shift())
        }
    }

    return sortedArray;
}



const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];

console.log(mergeSort(test1));
console.log(mergeSort(test2));