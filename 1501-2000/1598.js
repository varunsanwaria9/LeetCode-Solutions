var minOperations = function(logs) {
  var count = 0;
  for(let log of logs) {
    if(log == '../') {
        count = count > 0 ? count-1: 0;
    }
    else if(log == './') continue;
    else count++;
  }  
  return count;
};
