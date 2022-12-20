/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let total=0;
    let leftP=0;
    let rightP=height.length-1;
    let maxRight=0;
    let maxLeft=0;

    while(rightP>leftP){
        if(height[leftP]<=height[rightP]){
            maxRight=height[rightP];
            maxLeft = Math.max(height[leftP],maxLeft);
            total=(maxLeft-height[leftP])+total;
            leftP++;
        }else{
            maxLeft=height[leftP];
            maxRight= Math.max(height[rightP],maxRight);
            total=(maxRight-height[rightP])+total;
            rightP--;
        }
    }
    return total;
};

console.log(trap([4,2,0,3,2,5]));