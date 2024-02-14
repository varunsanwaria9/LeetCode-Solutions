var findWinners = function(matches) {
    var arr = [[],[]];
    // find no of teams
    var n = matches.length;
    var m = -1;
    for(let i=0;i<n;i++) {
        let temp = Math.max(matches[i][0],matches[i][1]);
        m = Math.max(m,temp);
    }
    // checking no of lost match and played
    var losts = Array.from(Array(m),(_,i) => 0);
    var played = Array.from(Array(m),(_,i) => false);
    console.log(losts, played);
    for(let i=0;i<n;i++) {
        let temp1 = matches[i][1] - 1;
        let temp2 = matches[i][0] - 1;
        losts[temp1]--;
        played[temp1] = true;
        played[temp2] = true;
    }
    console.log(losts,played);
    // setting up the result
    for(let i=0;i<m;i++) {
        if(played[i]) {
            if(losts[i] === 0) {
                arr[0].push(i+1);
            }
            if(losts[i] === -1) {
                arr[1].push(i+1);
            }
        }
    }
    return arr;
};
