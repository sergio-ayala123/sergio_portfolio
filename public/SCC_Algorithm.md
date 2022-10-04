# Strongly Connected Components Algorithm

The Kosaraju-Sharir algorithm is used to find the strongly connected components of a graph
A Strongly Connected Component in a graph is a group of nodes that can all reach each other through their connections. 
An easy way to identify a Strongly Connected Component in a graph is to just look and see where there is a cycle.
This algorithm to find the SCCs of a graph consists of 3 steps.

\
_  

**Perform Depth First Search on the original graph**


**Reverse the graph**


**Perform Depth First Search on the reversed graph**

\
Let's start with the first step, here I have sample code that will do this: 

``` python

    visited = []
    visited_order = []
    
    def explore_new(n):
        visited.append(n)

        for neighbor in graph[n]:
            if (neighbor not in visited):
                explore_new(neighbor)
        visited_order.append(n)

        for x in graph: 
            for y in x:
                if(y not in visited):
                    explore_new(y)
        return visited_order

```

The first for loop goes through each neighbor of each node in the graph and recursively visits them. They are marked as visited by adding them to the visited list. 


\
The second loop is for graphs that have disconnected components, it ensures that each node is visited even if some nodes have no way of reaching each other. 


In the end we return the list containing the nodes that were visited


\
The next step is to reverse the graph, here is some sample code that does this: 

```python 

    def reverse_graph(graph):
        newGraph = {}
        for x in graph.keys():
            for y in graph[x]:
                if (y not in newGraph):
                    newGraph[y] = {x}
                else:
                    newGraph[y].add(x)
        return sorted(newGraph.items())

        graph = {
            0: {1, 2},
            1: {2, 3},
            2: {0, 3, 4},
            3: {4}
        }
```


\
The basic idea of this function is to look at each key and see if it appears in the list of values for any other keys. And if it does appear there, then we look at THAT key and make that key a value for the original key.


So the reverse for the graph above would be 

``` python

    reverse_graph_result = {
        0: {2},
        1: {0},
        2: {0, 1},
        3: {1, 2},
        4: {2, 3}
    }

```


\
The final step of this process is to perform Depth First Search again on the reversed graph like this:

```python 

    stack = explore_new(0)
    def explore_reverse(graph, v):
            if(v not in visited):
                visited.append(v)
                component.append(v)
            
            for x in graph[v]:
                if (x not in visited):
                    explore_reverse(graph, x)

            if(len(stack)> 0):
                print('component is: ', component)
                if(len(component) > 0):
                    scc.append(component.copy())
                component.clear()
                explore_reverse(graph, stack.pop())
            return scc

```

\
This function goes through each neighbor of the reverse graph and adds each visited node into a coponent variable. When we reache a node that has already been visited, we add the current component variable to a list that keeps track of all SCCs. 