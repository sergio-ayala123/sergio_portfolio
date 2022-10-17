# Converting an array to a Binary Search Tree.

In this short blog, I will show you how to create a Binary Search Tree from a sorted array. 

A Binary Search Tree has a root whose left side is less than it and whose right side is greater than it. And this pattern repeats for the left and right sides. 


Let's first create a class called TreeNode to help create this BST. 

```python
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

```

Each node in a Binary Search Tree will be one a TreeNode object


This algorithm will make good use of recursion, it looks like this: 

```python

def arrayToBST(array):

    def sub(left, right):
        if left > right:
            return None

        mid = (left + right)//2
        root = TreeNode(array[mid])
        root.left = sub(left, mid-1)
        root.right = sub(mid+1, right)
        return root

    return sub(0, len(array)-1)
```

You pass in a sorted array and we return the root of the sub function. The sub function takes the index of the beginning and the index of the end of the array to find the middle, this first middle variable is used as the top root of the tree. 

To calculate the left tree we recursively call sub again with our original left and array[mid-1] because that is the right-most index on the left side of the array that we split in two. 

To calculate the right tree we do the same thing but instead we pass in array[mid+1] as the left and keep our original right. 