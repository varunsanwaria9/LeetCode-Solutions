var missingNumber = function(nums) {
    var sum = 0;
    let n = nums.length;
    for(let i=0;i<n;i++) {
        sum += nums[i];
    }
    let total = (n*(n+1))/2;
    return total - sum;
};
