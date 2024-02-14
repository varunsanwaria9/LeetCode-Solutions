def canConstruct(ransomNote,magazine):
    if len(ransomNote) > len(magazine):
        return False
    else:
        for i in ransomNote:
            idx = magazine.find(i)
            if(idx < 0):
                return False 
            else:
                magazine = magazine[:idx] + magazine[idx+1:]
        return True

print(canConstruct(ransomNote = "a", magazine = "b"))
print(canConstruct(ransomNote = "aa", magazine = "ab"))
print(canConstruct(ransomNote = "aab", magazine = "baa"))



"""
Question:

Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

"""
