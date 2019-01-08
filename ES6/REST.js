function sumUP(...toAdd) {
    console.log(toAdd);
    
    let result = 0;
    for(let i=0; i<toAdd.length;i++) {
        result+=toAdd[i];
    }
    return result;
}

console.log(sumUP(10,12,12,3,1));
