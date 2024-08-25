class Solution:
    def __init__(self):
        self.arr = []

    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if(root != None):
            if(root.left != None):
                self.postorderTraversal(root.left)
            if(root.right != None):
                self.postorderTraversal(root.right)
            self.arr.append(root.val)
        return self.arr
