const minRemoveToMakeValid=(string)=>{
    let arr=string.split("");
    const stack = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===')'){
            if (stack.length===0) {
                arr.splice(i, 1);
                i--;
                continue;
            }else{
                stack.pop();
            }
        }
        if(arr[i]==="("){
            stack.push(i);
        }
    }
    stack.forEach(bracket=>delete arr[bracket]);
    return arr.join("");
}

console.log(minRemoveToMakeValid("a)bc(d)((bbb)fdfd)(("));
