def matrixReshape(mat,r,c):
    if len(mat[0])*len(mat)!=r*c:
        return mat
    l = []
    for i in mat:
        l += i
    ans = []
    idx = 0
    for i in range(r):
        temp = []
        for i in range(c):
            temp.append(l[idx])
            idx += 1
        ans.append(temp)
    return ans

print(matrixReshape(mat = [[1,2],[3,4]], r = 1, c = 4))
print(matrixReshape(mat = [[1,2,3],[4,5,6]], r = 3, c = 2))
