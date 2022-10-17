# Creating A Maze Using Randomized Depth First Search

Randomized Depth first search is an algorithm used for traversing trees and graph data structures. 

It has many applications to all sorts of problems and in this blog, I am going to show you how you can use it to create a text maze in Python

The first thing we want to do is create a Class with variables for its column and row, as well as a variable that tells us if that position has been visited, as well as a symbol that we will use to denote if the path is clear or if the position is a wall. We also need to add a list of unvisitedCells and append each item in cellArray into that list. This will be used later in the main function. 


```python
class Cell:
    def __init__(self, x, y, isVisited, symbol):
        self.x = x
        self.y = y
        self.isVisited = isVisited
        self.symbol = symbol

rows, cols = (51, 51)

cellArray = [[Cell(i, j, False, '#') for j in range(cols)]
             for i in range(rows)]

unvisitedCells = []
for cell in cellArray:
    for item in cell:
        unvisitedCells.append(item)
```

After we get that done, we now need to create the following functions: checkNeighbors(), removeWall, and createMaze()


checkNeighbors() will be used to randomly select one of the 4 neighbors from a given cell and if that neighbor is not already visited then a path will be made from the given to cell to that neighbor. This function will look like this: 

```python
def checkNeighbors(test: Cell):

    rowDir = [-2, 2, 0, 0]
    colDir = [0, 0, 2, -2]

    chosenCells = []
    for x in range(4):
        curRow = test.x + rowDir[x]
        curCol = test.y + colDir[x]
        
        if curRow < 0 or curCol < 0:
            continue
        if curRow >= 50 or curCol >= 50:
            continue
        if cellArray[curRow][curCol].isVisited == True:
            continue
        else:
            chosenCells.append(cellArray[curRow][curCol])

    if (len(chosenCells) > 0):
        index = random.randint(0, len(chosenCells)-1)
        return chosenCells[index]
    else:
        return 'no neighbor'


```

removeWall() is used to "carve" a path from a given cell to its neighbor cell. Each call to the removeWall() function also displays the currently developing maze so you can see each step the algorithm is taking. You can also optionally add time.sleep() to slow down the output of the maze. 

```python
def removeWall(current: Cell, nextCell: Cell):
    
    cellArray[current.x][current.y].symbol = ' '
    cellArray[nextCell.x][nextCell.y].symbol = ' '

    if (current.x - nextCell.x == 2):  # mid to top
        cellArray[current.x - 1][current.y].symbol = ' '
    if (nextCell.x - current.x == 2):  # mid to bottom
        cellArray[current.x + 1][current.y].symbol = ' '
    if (nextCell.y - current.y == 2): # mid to right
        cellArray[current.x][current.y + 1].symbol = ' '
    if (current.y - nextCell.y == 2): # mid to left
        cellArray[current.x][current.y-1].symbol = ' '
    bob = ''
    for index in range(51):
        for indexJ in range(51):
            bob += cellArray[index][indexJ].symbol
        print(bob)
        bob= ''
    # time.sleep(0.05)


```

The output should look something like this:

![logo](https://github.com/sergio-ayala123/sergio_portfolio/raw/master/public/dfsMazePython.jpg)