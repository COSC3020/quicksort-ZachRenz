[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Worst Case Runtime

To find the worst case we need to imagine an array of any size that is sorted in descending order, and run that through our algorithm.

This algorithm will always make the first item in the array the current pivot, which is the number that takes the maximum amount of work to move to the end of the list of unsorted numbers. We'll never have a right side of the pivot to sort thankfully, but that doesn't make it any better. Even though this algorithm only looks at the left side of the currently sorted pivot, it's just moving the first number in the array to the end of unsorted numbers in the array, with a total work of `n * n` where n is the set of unsorted numbers in our array.

Therefore, the runtime complexity for the worst case is $\Theta(n^2)$


