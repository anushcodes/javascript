# Javascript - Namaste Javascript Playlist Learnings

## Video 1

Everything in JS happens in an "execution context". Execution Context is just an empty box or container in which the entire js code is executed.

Execution Context has 2 components: 
* Memory(Variable environment)  
* Code(Thread of Execution)

In Memory, Key-Value pair of (variable-name,value) is saved.
In Code, The program is executed line by line.

Javascript is Synchronous Single-Threaded.  
* Synchronous : Execution in a specific order. 
* Single-threaded : Execute only one command at a time. 

## Video 2

### What happens when you run .js code.

* Execution context is created. (First one global)

It has 2 phases:
* Memory creation phase - Variables assigned with undefined. Functions assigned with the body(code reference).
* Code Execution phase - Variables assigned with values as per code. When a function is invoked, a new Execution context is created and the same process repeats for that new context. On return statement or end of function body, the newly created execution context is deleted and the control goes to the context from where the function was invoked.

* To manage execution contexts in correct order, Call Stack is used.

* Global Execution Context(GEC) is also deleted at the end of the program.

