var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a-b);
    s = s.sort((a,b) => a-b);
    var count = 0;
    for(let i=0;i<s.length;i++) {
        if(s[i] >= g[count]) count++;
    }
    return count;
};
