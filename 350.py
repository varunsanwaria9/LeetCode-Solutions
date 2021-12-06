def intersection(nums1,nums2):
    s = set(nums1 + nums2)
    ans = []
    for i in s:
        ans += [i for j in range(min(nums1.count(i),nums2.count(i)))]
    return ans

print(intersection(nums1 = [1,2,2,1], nums2 = [2,2]))
print(intersection(nums1 = [4,9,5], nums2 = [9,4,9,8,4]))
