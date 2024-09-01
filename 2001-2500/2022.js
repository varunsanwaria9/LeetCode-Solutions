var construct2DArray = function(original, m, n) {
    var arr = [];
    if(original.length != (m*n)) return arr;
    var temp = [];
    for(let i=1;i<=original.length;i++) {
        temp.push(original[i-1]);
        if(i%n==0) {
            arr.push(temp);
            temp = [];
        }
    }
    return arr;  
};
