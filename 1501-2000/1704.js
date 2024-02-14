var halvesAreAlike = function(s) {
    function isVowel(c) {
        if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
            return true;
        return false; 
    }

    s = s.toLowerCase();
    let mid = s.length/2;
    let a = 0, b=0;
    for(let i=0;i<mid;i++) {
        if(isVowel(s[i])) a++;
        if(isVowel(s[mid+i])) b++;
    }
    console.log(a,b);
    return a==b;
};
