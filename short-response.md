### Short Response Section
Answer short response questions directly in this markdown file. Answer questions in 2 - 3 sentences. Be sure to format your responses appropriately.

1. In the browser, what serves as the global object?

2. In the Node.js environment, what serves as the global object?

3. In the browser environment, what does the following log?
      ```javascript
      a = 10;

      console.log(window.a);
      ```      

##### All following code snippets should be run in the browser environemnt: 

4. What does the following code log? **Why**?
      ```javascript
      var b = 100;

      console.log(window.b);
      ```
      
5. What does the following code log? **Why**?
      ```javascript
      let c = 9;
      const d = 11;

      console.log(window.c);
      console.log(window.d);
      ```

6. What does the following code log? Why?
      ```javascript
      function func() {
        var x = 1;
      }

      func();

      console.log(x);
      ```

7. What does the following code log? Explain the difference, if any, between this output and that of problem 6.
      ```javascript
      function func() {
        x = 1;
      }

      func();

      console.log(x);
      ```

8. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```

9. What will the following code log? Explain the difference, if any, between this output and that of problem 8.
      ```javascript
      const obj = {
        func: function() {
          return this;
        },
      };

      let context = obj.func();

      console.log(context);
      ```

10. What will the following code produce? **Why**? 
      ```javascript
      var x = 10;
      var y = 10;
      var z = {
        x: -10,
        y: -10,
      };

      function add() {
        return this.x + y;
      }

      z.add = add;

      console.log(add());
      console.log(z.add());
      ```
