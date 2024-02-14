def generate(numRows):
    if(numRows == 1):
        return [[1]]
    elif(numRows == 2):
        return [[1],[1,1]]
    else:
        arr = [[1],[1,1]]
        for i in range(3,numRows+1):
            temp = [1] 
            for j in range(1,i-1):
                temp.append( arr[i-2][j] + arr[i-2][j-1] )
            arr.append(temp + [1])
        return arr


print(generate(5))
print(generate(1))
