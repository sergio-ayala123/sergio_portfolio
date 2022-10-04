# Python TDD

Test Driven Development is the process of creating test cases before any actual code is written. The basic rules to TDD are this:



**Write production code only to pass a failing unit test**


**Write no more of a unit test than sufficient to fail (compilation failures are failures)**


**Write no more production code than necessary to pass the one failing unit test**


\
With these rules in mind, we can begin to create tests for a simple Calculator app



```python

    def test_add():
        calculator = Calculator()
        assert(calculator.add(3,4) == 7)
        assert(calculator.add(34,43) == 77)
        assert(calculator.add(-9,4) == -5)

    def test_subtract():
        calculator = Calculator()
        assert(calculator.subtract(3,4) == -1)
        assert(calculator.subtract(3,47) == -44)
        assert(calculator.subtract(3,46) == -43)

    def test_multiply():
        calculator = Calculator()
        assert(calculator.multiply(4,5) == 20)
        assert(calculator.multiply(4,0) == 0)
        assert(calculator.multiply(4,500) == 2000)

    def test_divide():
        calculator = Calculator()
        assert(calculator.divide(4,2) == 2)
        assert(calculator.divide(3,4) == 0.75)
        assert(calculator.divide(999,333) == 3)

    def test_divide_byZero():
        calculator = Calculator()
        assert(calculator.divide(9,0) == 'cannot divide by zero')


```

With these written we can begin creating a class named Calculator that has these methods. 


\
Our class will look like this:


```python

    class Calculator:
        x = 0
        y = 0
        def add(self,x,y):
            self.x = x
            self.y = y
            return self.x + self.y

        def subtract(self, x,y):
            self.x = x
            self.y = y
            return self.x-self.y

        def multiply(self, x,y):
            self.x = x
            self.y = y
            return self.x*self.y

        def divide(self,x,y):
            self.x = x
            self.y = y
            if(y == 0):
                return 'cannot divide by zero'
            else:
                return self.x/self.y

   
   
```

After this we can then write a main function that will ask the user for input 


```python


    if __name__ == '__main__':
        calculator = Calculator()

        val1 = int(input('Enter First Number '))
        val2 = int(input('Enter Second Number '))

        print('Result for addition is: ', calculator.add(val1, val2))
        print('Result for subtraction is: ', calculator.subtract(val1, val2))
        print('Result for multiplication is: ', calculator.multiply(val1, val2))
        print('Result for division is: ', calculator.divide(val1, val2))

```