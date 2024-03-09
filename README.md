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
``` javascript
for (pivot = 0; numSort.indexOf(0) != -1; pivot = 0)
        for(pivot; pivot < array.length; pivot ++)
```
The second for loop will always iterate over the entire array no matter what, so i'm going to associate a complexity of `n` to it. The outside for loop only breaks when the list is sorted, (which is when our list of zeros are ones, it indicates if a number is sorted in that place) so this for loop depends on the complexity of the `movePivot` function.

Looking at the function `movePivot`:
``` javascript
for(j = pivot+1; numSort[j] == 0 && j < array.length; j++){
    if (array[j] < array[pivot]){ // Here we move all numbers less than pivot in front of pivot
        [array[j], array[lessThan]] = [array[lessThan], array[j]];
        lessThan++;
    }
}
```
This for loop will always run through the entire unsorted subarray for every number in each partition. (Subarray meaning the space between the pivot and a sorted number). So this for loop also has a complexity of `n`.

Therefore, the runtime complexity for the worst case is $\Theta(n^2)$


