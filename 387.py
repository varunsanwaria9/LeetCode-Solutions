def firstUniqChar(s):
    for i in range(len(s)):
        if s.count(s[i]) == 1:
           return i
    return -1

print(firstUniqChar(s = "leetcode"))
print(firstUniqChar(s = "loveleetcode"))
print(firstUniqChar(s = "aabb"))

"""
Question:

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
"""
