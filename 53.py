# Doubt

def maxSubArray(nums):
    currSum,maxSum = nums[0],nums[0]
    for i in range(1,len(nums)):
        currSum = max(currSum + nums[i], nums[i])
        maxSum = max(maxSum,currSum)
    return maxSum

print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) #6
print(maxSubArray([1])) # 1
print(maxSubArray([5,4,-1,7,8])) #23 

"""
Question

Find the max sum of contingous subarray

"""
