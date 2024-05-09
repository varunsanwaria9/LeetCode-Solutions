var maximumHappinessSum = function(happiness, k) {
    happiness = happiness.sort((a,b) => a-b);
    let total = 0;
    let n = happiness.length - 1;
    for(let i=0;i<k;i++) {
        total += ((happiness[n] - i > 0)? happiness[n] - i: 0);
        n--;
    }
    return total;
};