var minRemoveToMakeValid = function(s) {
    let validStr = '';
    let count = 0;

    for(let i=0;i<s.length;i++) {
        if(s[i] == '(') {
            count++;
            validStr += s[i];
        }
        else if(s[i] == ')') {
            if(count>0) {
                count--;
                validStr += s[i];
            }
        }
        else validStr += s[i];
    }
    s = validStr;
    validStr = ''
    for(let i=s.length-1;i>=0;i--) {
        if(s[i] == '(' && count > 0) count--;
        else {
            validStr = s[i] + validStr;
        }
    }

    return validStr;
};
