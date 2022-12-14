# JavaScript Classes

A simple class in JavaScript can be made like this:

```javascript
        class Student {
            name = ''
            age = 0
            constructor(name,age){
            this.name = name;
            this.age = age;
            }
        }
    

```

We then need to add a constructor to initialize these values whenever we create a new object.
```javascript

    class Student {
        name = ''
        age = 0
   
        constructor(name,age){
        this.name = name;
        this.age = age;
        } 
    }


```

A class by itself without any methods has minimal functionality. We can begin to add methods to this simple class like so: 

```javascript

    class Student {
        name = ''
        age = 0

        constructor(name,age){
            this.name = name;
            this.age = age;
        }

        get studentInfo() {
            return this.info
        }


        info() {
            return (this.name + this.age)
        }
    }


``` 

With this get function we can return the students name and age as well. 


\
\
To test some of this functionality we can use the testing library 'Jest' and create the following test cases:


``` javascript


    const {Student} = require('./Student')


    test('Object is correctly instantiated', () => {
        const bob = new Student('bob', 80)

        expect(bob).toEqual(new Student('bob', 80))
    })


    test('Testing info() function', () => {
        const bob = new Student('bob', 80)

        expect(bob.info()).toEqual('bob80')
    })




```