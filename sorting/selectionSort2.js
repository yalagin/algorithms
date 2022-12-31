

const array = [5,3,1,6,4,2];
const kToFind = 4;

const swap = function (array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const getPartition = function (nums, left, right) {
    const pivotElement = nums[right];
    let partitionIdx = left;

    for (let j = left; j < right; j++) {
        if (nums[j] <= pivotElement) {
            swap(nums, partitionIdx, j);
            partitionIdx++;
        }
    }
    swap(nums, partitionIdx, right)

    return partitionIdx;
};

const quickSort = function (nums, left, right) {
    if(left < right) {
        const partitionIndex = getPartition(nums, left, right);

        quickSort(nums, left, partitionIndex - 1);
        quickSort(nums, partitionIndex + 1, right);
    }
};

console.log(findKthLargest(array, kToFind))
