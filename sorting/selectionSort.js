const selectionSort= (arr)=>{
    const length = arr.length
    for(let j=0;j<length;j++) {
        let smallest = arr[j];
        for (let i = 0; i < length; i++) {
            if (smallest < arr[i]) {
                const temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

console.dir(selectionSort([2,5,4,6,7]))