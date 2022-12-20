var typeOutString= function ( first,second){
    let firstArray=[]
    let secondArray=[]

    first.split("").forEach(letter=>{
        if(letter==="#"){
            return firstArray.pop();
        }
        firstArray.push(letter);
    })

    second.split("").forEach(letter=>{
        if(letter==="#"){
            return secondArray.pop();
        }
        secondArray.push(letter);
    })

    return firstArray.join()===secondArray.join()
}