function quicksort(array = []) {
    if (array.length <= 1){
        return array;
    }
    numSort = Array(array.length).fill(0); // This array tells our algorithm what numbers are alreay storted
    // movePivot(numSort, array, 0, 1);
    for (pivot = 0; numSort.indexOf(0) != -1; pivot = 0){
        for(pivot; pivot <= array.length; pivot ++){
            if (numSort[pivot] == 0){
                lessThan = pivot + 1; // Stores the index of the last item less than our pivot
                pivot = movePivot(numSort, array, pivot, lessThan);
                // console.log(numSort); // Debugging Script
            }
        }
    } 
    return array;
}

function movePivot(numSort, array, pivot, lessThan) {
    for(j = pivot+1; numSort[j] == 0 && j < array.length; j++){
        if (array[j] < array[pivot]){ // Here we move all numbers less than pivot in front of pivot
            [array[j], array[lessThan]] = [array[lessThan], array[j]];
            lessThan++;
        }
    }
    numSort[lessThan-1] = 1; // Marks where pivot ends up as in place
    [array[pivot], array[lessThan - 1]] = [array[lessThan - 1], array[pivot]];
    return j;
}

// console.log(quicksort([3,2,1,5,4])); // Debugging Script



