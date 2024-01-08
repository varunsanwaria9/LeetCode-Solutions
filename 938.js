var rangeSumBST = function(root, low, high) {
    
    var total = 0;

    function test(root,low,high) {
        let value = root.val;
        if(low<=value && high>= value)total += value;
        if(root.left) test(root.left,low,high);
        if(root.right) test(root.right,low,high);
    }

    test(root,low,high);
    return total;

};
