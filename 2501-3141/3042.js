var countPrefixSuffixPairs = function(words) {
    var ans = 0;
    for(let i=0;i<words.length;i++) {
        for(let j=i+1;j<words.length;j++) {
            let len1 = words[i].length;
            let first = words[j].slice(0,len1);
            let last = words[j].slice(-len1);
            if(last == words[i] && first == words[i]) ans++;

        }
    }
    return ans;
};
