var findDuplicates = function(nums) {
    let d = {};
    let arr = [];
    for(let i=0;i<nums.length;i++) {
        if(d[nums[i]]) arr.push(nums[i]);
        else d[nums[i]] = true;
    }
    return arr;
};