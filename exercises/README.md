# Coding Exercises

Source: [Coding Interview Bootcamp](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure)

## Setup

We will be using [Jest](https://jestjs.io/) to validate our solutions.
Jest is a JavaScript testing framework.

In order to get setup run `npm install` (make sure you are in the `exercises` folder!). This will install Jest along with all of its dependencies.

## Testing

Each exercise comes with a number of tests written in the respective `test.js` file.
Tests allow us to quickly validate our code.

**For the following, make sure you run everything in the `exercises` folder**

You can run _all_ of the testing by running `jest` in your command line.
There are a shoot-ton of tests, so you probably don't want to do this.

In order to run the batch of tests for a single exercise, run `jest <folder>/test.js`. So, for example, to run the tests for anagram you would run `jest anagram/test.js`

You can also "watch" the tests. This means Jest will wait for up updates to your code and rerun the tests on save.
You can run Jest in watch mode by appending the `--watch` flag. For example: `jest anagram/test.js --watch`

## Your Task

You task is to work your way through the exercises in the following order.
Make sure all of the test cases pass before moving on!

Be conscious of the time it takes you to work through these.
Ideally each exercise should take no more than 30 minutes each.
That being said, I care more that you get a solution rather than complete it within the 30 minutes.

1. palindrome
2. anagrams
3. maxchar
4. fibonnaci
5. tobinary
6. chunk
7. steps
8. pyramids
9. matrix

A few of the problems can be solved recursively. Challenge yourself to find the recursive solutions!

## Material to Review

You may want to review a few things before starting the problems.
Namely:

- recursion
- hash maps
- binary
