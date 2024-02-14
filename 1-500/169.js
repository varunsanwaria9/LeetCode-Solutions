var majorityElement = function(nums) {
    var d = {};
    for(let i in nums) {
        if(d[nums[i]]) d[nums[i]]++;
        else d[nums[i]] = 1;
    }
    var keys = Object.keys(d);
    var max = d[keys[0]];
    var value = keys[0];
    console.log(max);
    for(let key in keys) {
        if(d[keys[key]] > max) {
            value = keys[key];
            max = d[keys[key]];
        } 
    }
    return value;
};
