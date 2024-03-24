var findDuplicate = function(nums) {
    let d = {};
    for(let i=0;i<nums.length;i++) {
        if(d[nums[i]]) return nums[i];
        else d[nums[i]] = true;
    }
    return 0;
};