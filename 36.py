def isValidSudoku(board):
    for i in range(9):
        tempL = board[i]
        if(len(set(tempL))+tempL.count(".")-1 != 9):
            return False
    for i in range(9):
        tempL = [board[j][i] for j in range(9)]
        if(len(set(tempL)) + tempL.count(".")-1 != 9):
            return False
    for i in range(0,9,3):
        for j in range(0,9,3):
            tempL = [board[i][k] for k in range(j,j+3)] + [board[i+1][k] for k in range(j,j+3)] + [board[i+2][k] for k in range(j,j+3)]
            if(len(set(tempL)) + tempL.count(".") - 1 != 9):
                return False
    return True

print(isValidSudoku(board=[
    [".",".",".", ".","5",".", ".","1","."],
    [".","4",".", "3",".",".", ".",".","."],
    [".",".",".", ".",".","3", ".",".","1"],

    ["8",".",".", ".",".",".", ".","2","."],
    [".",".","2", ".","7",".", ".",".","."],
    [".","1","5", ".",".",".", ".",".","."],
    
    [".",".",".", ".",".","2", ".",".","."],
    [".","2",".", "9",".",".", ".",".","."],
    [".",".","4", ".",".",".", ".",".","."]]))
