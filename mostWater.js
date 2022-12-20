/**
 * @param {number[]} height
 * @return {number}
 */
var oldMaxArea = function(height) {
    let maxAreaNumber = 0;

    for(let i = 0;i<height.length;i++){
        for(let j= i+1;j<height.length;j++){
            const currentAreaNumber = Math.min(height[i],height[j]) * (j-i);
            if(currentAreaNumber>maxAreaNumber){
                maxAreaNumber = currentAreaNumber;
            }
        }
    }

    return maxAreaNumber;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAreaNumber = 0;
    let leftPointer = 0;
    let rightPointer = height.length-1;

    while(leftPointer!==rightPointer){
        const currentMinNumberBtwPointers =  Math.min(height[leftPointer],height[rightPointer]);
        const width = rightPointer-leftPointer;
        const currentAreaNumber = currentMinNumberBtwPointers * width;
        maxAreaNumber = Math.max(currentAreaNumber,maxAreaNumber);
        if(height[leftPointer]<=height[rightPointer]){
            leftPointer++;
        }else{
            rightPointer--;
        }
    }

    return maxAreaNumber;
};

console.log(maxArea([1,8,100,2,100,4,8,3,7]));