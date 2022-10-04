# HashMaps, Collections, and Stacks


## Hashmaps
In this simple function we create a Map object to be used for testing.
``` javascript

function createHashMap(){
    const map = new Map();
    return map
}

```


A map holds key value pairs, the value on the right being the key and value on the left being the value


\
We can set values like this:

``` javascript

    map.set(1,'bob')
    map.set(2,'billy')
    map.set(3,'joe')
    map.set(4,'sam')
    map.set(5,'sally')
    map.set(6,'john')


```


Retrieving values from maps is pretty straightforward 

``` javascript

    const item = map.get(1)


```
In this example we are trying to get the value from key 1,
The value in the item variable in this case is 'bob'



\
\
You can also delete specific items from the Map like this:


``` javascript

map.delete(1)

```
The map now doesn't have key 1 with value of 'bob'


\
\
We can use a testing library known as 'Jest' to verify this behavior is correct.

``` javascript

                    const createHashMap = require('./hashMap')

                    test('Properly instantiated Map', () => {
                        expect(createHashMap()).toEqual(new Map())
                    })

                    test('Add values to HashMap', () => {
                        const map = createHashMap()
                        expect(map.size).toBe(0)
                        map.set(1, 'bob')
                        map.set(2, 'test')
                        expect(map.size).toBe(2)
                    })

                    test('Retrieving value from key', () => {
                        const map = createHashMap()
                        map.set(1, 'bob')

                        const value = map.get(1)

                        expect(value).toBe('bob')
                    })

                    test('Trying to retreive value from non existing key ', () => {
                        const map = createHashMap()
                        map.set(1,'bob')

                        const value = map.get(2)

                        expect(value).toBe(undefined)
                    })

                    test('Deleting key from HashMap', () => {
                        const map = createHashMap()
                        map.set(1,'bob')
                        map.set(2,'test')
                        expect(map.size).toBe(2)

                        map.delete(1)

                        expect(map.size).toBe(1)

                    })

```


## Collections

Javascript has a Collection named a Set, we can create a similar function above to create and return a set 

``` javascript

function createSet() {
    const set = new Set();
    return set;
}


```

You can add items to a set using the add function like this: 

``` javascript

    set.add(23)
    set.add(1203)


```

The Set Collection also has a delete function that you can use to delete specific items from that Set like this: 

``` javascript

    set.delete(23)

```

We can use the same testing library as above to test the functionality of a Set like this: 

```javascript

    test('Set is created correctly', () => {
        expect(createSet()).toEqual(new Set())
    })

    test('Items are properly added to set', () => {
        const set = createSet()

        expect(set.size).toBe(0)

        set.add(23)
        set.add(3)
        set.add(4)

        expect(set.size).toBe(3)
    })


    test('Check for item in set', () => {
        const set = createSet()

        set.add(34)
        set.add(3)
        set.add(23)
        set.add(334)
        
        expect(set.has(4)).toBe(false)
        expect(set.has(34)).toBe(true)
    })

    test('Delete item in set', () => {
        const set = createSet()

        
        set.add(14)
        set.add(0)
        set.add(2)
        set.add(49)
        expect(set.size).toBe(4)
        expect(set.has(14)).toBe(true)
        
        set.delete(14)

        expect(set.size).toBe(3)
        expect(set.has(14)).toBe(false)
    })

```

## Stacks

The Stack in JavaScript is very easy to create

``` javascript

    stack = []


```

A Stack is a First In First Out (FIFO) data structure. You can use the Push function to add elements to the Stack

``` javascript

    stack.push(1)
    stack.push(2)
    stack.push(3)

```

The stack now looks like this: [1,2,3]

\
\
To remove elements from the Stack you use the Pop function like this:

```javascript
    removedItem = stack.pop()

```
Since a Stack is FIFO, the removedItem variable is 3, since 3 was the most recent value added. 


Tests for these functions can be written like this:

``` javascript

test('Stack Initialization', () => {
    const stack = []
    
    expect(stack).toEqual([])
})

test('Adding Elements to Stack ', () => {
    const stack = []

    expect(stack.length).toBe(0)

    stack.push(34)
    stack.push(342)
    stack.push(3)
    stack.push(1)

    expect(stack.length).toBe(4)
})

test('Removing elements from Stack', () => {
    const stack = []

    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.length).toBe(3)

    stack.pop()
    
    expect(stack.length).toBe(2)
    
})

```