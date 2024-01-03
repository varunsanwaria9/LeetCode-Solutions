var numberOfBeams = function(bank) {
    var count = 0;
    var lights = [];
    for(let i=0;i<bank.length;i++) {
        let n = (bank[i].split('1').length - 1);
        if(n !== 0) {
            lights.push(n);
        }
    }
    for(let i=0;i<lights.length-1;i++) {
        count += (lights[i] * lights[i+1]);
    }
    return count;  
};
