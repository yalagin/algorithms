const bubble = (arr)=>{
    for(let i=1;i<arr.length;i++) {
        for (let a = 0; a < arr.length-i ; a++) {
            if (arr[a] > arr[a+1] ) {
                const temp = arr[a];
                arr[a] = arr[a + 1];
                arr[a + 1] = temp;
            }
        }
    }
    return arr;
}

console.dir(bubble([2,5,4,6,7]))