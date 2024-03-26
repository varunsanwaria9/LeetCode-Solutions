var firstMissingPositive = function(nums) {
    for(let i=0;i<nums.length;i++) {
        if(nums[i] <= 0) nums[i] = nums.length + 1;
    }
    for(let i=0;i<nums.length;i++) {
        let idx = Math.abs(nums[i]) - 1;
        if(idx<nums.length) {
            nums[idx] = -nums[idx];
            if(nums[idx] > 0 ) nums[idx] = -nums[idx];
        }
    }
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > 0) return i+1;
    }
    return nums.length+1;
};