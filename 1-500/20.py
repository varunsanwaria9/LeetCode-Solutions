def isValid(s):
    arr = []
    for i in s:
        if i in ['(','{','[']:
            arr.append(i)
        elif len(arr) > 0:
            if i == ')' and arr[-1] == '(':
                arr.pop(-1)
            elif i == '}' and arr[-1] == '{':
                arr.pop(-1)
            elif i == ']' and arr[-1] == '[':
                arr.pop(-1)
            else:
                return False
        else:
            return False
    return True if len(arr) == 0 else False

print(isValid(s = "()"))
print(isValid(s = "()[]{}"))
print(isValid(s = "(]"))
print(isValid(s = "([)]"))
print(isValid(s = "{[]}"))


