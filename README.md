# 0X00-ES6_Basics
# 0x00. ES6 Basics
# Specializations - Web Stack programming ― React
# By Guillaume, CTO at Holberton School
# Ongoing project - started 05-10-2021, must end by 05-11-2021 (in about 9 hours) - you're done with 0% of tasks.
# Checker was released at 05-10-2021 12:00 PM
# QA review fully automated.
This project is about learning ES6 Basics
```
# Overview
This project is about learning ES6 Basics
# Learning Objectives
* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops
# Requirements
* All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x  
* Allowed editors: `vi, vim, emacs, Visual Studio Code`
* All your files should end with a new line
* All your files must be executable
* The length of your files will be tested using `wc`
* You are not allowed to use `var`
# More Info
Install NodeJS 12.11.x
```sh
$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
$ nodejs -v
v12.11.1
$ npm -v
`   6.11.3
```
Install Jest, Babel, and ESLint
In your project directory, you are going to initialize a `npm` project.
```sh
$ npm init -y
```
Install Jest using `npm`:
```sh
$ npm install --save-dev jest
``` 
Install Babel using `npm`:
```sh
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
```
Install ESLint using `npm`:
```sh
$ npm install --save-dev eslint
```
Install ESLint configuration AirBnB:
```sh
$ sudo npm install -g eslint
$ sudo npm install -g eslint-config-airbnb-base
```
# Tasks
## 0. Const or let?
Write a function or constant `print` that prints `x` with `console.log(...)`
* File: [0-constants.js](0-constants.js/)
## 1. Block Scope
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
* File: [1-block-scoped.js](1-block-scoped.js/)
## 2. Arrow functions
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
* File: [2-arrow.js](2-arrow.js/)   
## 3. Parameter defaults
Condense the internals of the following function to 1 line - without changing the name of each function/variable.
* File: [3-default-parameter.js](3-default-parameter.js/)
## 4. Rest parameter syntax for functions
Modify the following function to return the number of arguments passed to it using the rest parameter syntax
* File: [4-rest-parameter.js](4-rest-parameter.js/)
## 5. The wonders of spread syntax
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
* File: [5-spread-operator.js](5-spread-operator.js/)
## 6. Take advantage of template literals
Modify the following function to use a template literal so you can the same output as the printf version
* File: [6-string-interpolation.js](6-string-interpolation.js/)
## 7. Object property value shorthand syntax
Notice how the keys and the variable names are the same?
Modify the following createStudent function to use this shorthand syntax
* File: [7-getBudgetObject.js](7-getBudgetObject.js/)
## 8. No need to create empty objects before adding in properties
Modify the following function to replace the entire object `newClass` with a one-liner to return the object `newClass` with all values assigned to the following values:
* File: [8-getBudgetCurrentYear.js](8-getBudgetCurrentYear.js/)
## 9. ES6 method properties
Fix this code so that it properly executes `getBudgetObject` function and returns the following values (same as task #8):
* File: [9-getFullBudget.js](9-getFullBudget.js/)
## 10. For...of Loops
Rewrite the function `iterateThroughObject` to use ES6’s for...of operator.
* File: [10-loops.js](10-loops.js/)
## 11. Iterator
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.
* File: [11-createEmployeesObject.js](11-createEmployeesObject.js/)
## 12. Let's create a report object
Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `iterateThroughObject`.
* File: [12-createReportObject.js](12-createReportObject.js/)
## 13. Iterating through report objects
Write a function named `createEmployeesObject` that will receive two arguments:
* File: [100-createIteratorObject.js](100-createIteratorObject.js/)
## 14. Iterate through object
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.
* File: [101-iterateThroughObject.js](101-iterateThroughObject.js/)
## 15. Iterate through object
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.
* File: [102-divideFunction.js](102-divideFunction.js/)
## 16. Iterate through object
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.
* File: [103-objectValues.js](103-objectValues.js/)
## 17. Iterate through object
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.
* File: [104-iterateThroughObject.js](104-iterateThroughObject.js/)
## 18. Iterator
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.
* File: [105-createEmployeesObject.js](105-createEmployeesObject.js/)
## 19. Iterate through object
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.

## 20. Iterator
Write a function named `iterateThroughObject` that returns the list of `availableItems` on the `receipt` in alphabetical order.

