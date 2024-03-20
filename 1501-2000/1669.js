var mergeInBetween = function(list1, a, b, list2) {
    var count = 0;
    var root = list1;
    while(count <= b) {
        root = root.next;
        count++;
    }
    var temp = list1;
    count = 0
    while(++count < a) temp = temp.next;
    temp.next = list2;
    while(temp.next) temp = temp.next;
    temp.next = root;
    return list1;  
};