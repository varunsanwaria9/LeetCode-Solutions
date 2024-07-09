var averageWaitingTime = function(cust) {
    var finish = cust[0][0] + cust[0][1];
    var total = cust[0][1];
    for(let i=1;i<cust.length;i++) {
        let taken = cust[i][1];
        if(finish > cust[i][0]) {
            taken += (finish - cust[i][0]);
        }
        finish = cust[i][0] + taken;
        total += taken;
    }
    return total/cust.length;
};