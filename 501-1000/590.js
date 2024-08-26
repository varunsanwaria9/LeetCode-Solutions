var postorder = function(root) {

    var arr = [];
    
    function traverse(root) {
        for(var i=0;i<root.children.length;i++) {
            traverse(root.children[i]);
        }
        arr.push(root.val);
    }

    if(root == null) return arr;
    traverse(root);
    return arr;
};
