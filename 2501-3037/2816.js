var doubleIt = function(head) {
    var temp = head;
    var number = '';
    while(temp) {
        number += temp.val;
        temp = temp.next;
    }
    let carry = 0;
    for(let i=number.length-1;i>=0;i--) {
        let val = (+number[i] * 2) + carry;
        carry = (Math.floor(val/10))
        temp = new ListNode(val%10,temp);
    }
    if(carry) {
        temp = new ListNode(carry,temp);
        // temp = value;
    }
    return temp;  
};
