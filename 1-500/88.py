def merge(nums1,m,nums2,n):
    i = 0
    while(n>0):
        nums1[m+i] = nums2[i] 
        n -= 1 
        i += 1
    nums1.sort()
    print(nums1)
merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3)
print()
merge(nums1 = [1], m = 1, nums2 = [], n = 0)
print()
merge(nums1 = [0], m = 0, nums2 = [1], n = 1)

"""
Question:
    Merge sorted array
"""
