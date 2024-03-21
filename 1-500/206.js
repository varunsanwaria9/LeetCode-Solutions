var reverseList = function(head) {
    let root = null;
    while(head) {
        let temp = root;
        root = new ListNode(head.val);
        root.next = temp;
        head = head.next;
    }
    return root;
};