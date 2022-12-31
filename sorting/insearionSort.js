const insertionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(!!arr[i-1]&& arr[i-1]>arr[i]){
            let j = i;
            while(j){
                if(arr[j-1]>arr[j]){
                    const temp =arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=temp;
                }else{
                    break;
                }
                j--;
            }
        }
    }
    return arr;
}

function insertionSortTrue(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }
    return arr
}
console.dir(insertionSort([2,5,12,4,6,7,1,10]))