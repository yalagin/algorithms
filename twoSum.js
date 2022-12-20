/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for(let i=0;i<nums.length;i++){
        const numberToFind = target-nums[i];
        if(hash.hasOwnProperty(numberToFind)){
            return [i,hash[numberToFind]];
        }
        hash[numberToFind]=i;
    }
};

console.log(twoSum([2,7,11,15],9));