var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    var diff = 0;
    console.log(points);
    for(let i=0;i<points.length-1;i++) {
        diff = Math.max(diff, points[i+1][0] - points[i][0]);
    }
    return diff;
};
