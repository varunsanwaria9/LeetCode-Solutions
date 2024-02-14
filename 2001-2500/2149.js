var rearrangeArray = function(nums) {
    var positive = [];
    var negative = [];
    var n = nums.length;
    for(let i=0;i<n;i++) {
        if(nums[i] > 0) positive.push(nums[i]);
        else negative.push(nums[i]);
    }
    for(let i=0;i<n;i += 2) {
        nums[i] = positive[i/2];
        nums[i+1] = negative[i/2];
    }
    return nums;
};