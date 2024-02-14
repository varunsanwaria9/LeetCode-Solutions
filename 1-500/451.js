var frequencySort = function(s) {
    var d = {};
    for(let i in s) {
        if(d[s[i]]) {
            d[s[i]]++;
        }
        else {
            d[s[i]] = 1;
        }
    }
    var keys = Object.keys(d).sort((a,b) => d[b] - d[a]);
    var ans = [];
    for(let key=0;key<keys.length;key++) {
        for(let i=0;i<d[keys[key]];i++) {
            ans.push(keys[key]);
        }
    }

    return ans.join('');
};
