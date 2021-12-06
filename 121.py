def maxProfit(prices):
    minP,maxP,ans = prices[0],prices[0],0
    i=1
    while len(prices) > i:
        if(minP > prices[i]):
            minP = prices[i]
            maxP = prices[i]
        elif(maxP < prices[i]):
            maxP = prices[i]
            ans = max(ans,maxP-minP)
        i += 1
    return ans



print(maxProfit(prices = [7,1,5,3,6,4]))
print(maxProfit(prices = [7,6,4,3,1]))
