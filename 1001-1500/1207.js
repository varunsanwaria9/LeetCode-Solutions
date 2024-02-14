var uniqueOccurrences = function(arr) {
    var occur = new Set();
    var unique = 1;
    var count = 1;
    arr = arr.sort((a,b) => a-b);
    console.log(arr);
    occur.add(arr[0]);
    for(let i=1;i<arr.length;i++) {
        if(arr[i-1] < arr[i]) {
            occur.add(count);
            count = 1;
            unique++;
        } 
        else count++;
    }
    return occur.size === unique;
};
