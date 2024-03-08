function quicksort(array = []) {
    if (array.length <= 1){
        return array;
    }
    numSort = Array(array.length).fill(0); // This array tells our algorithm what numbers are alreay storted
    for (i = 1, pivot = numSort.indexOf(0); i <= array.length; i++, pivot = numSort.indexOf(0)){
        lessThan = pivot + 1; // Stores the index of the last item less than our pivot
        for(j = pivot+1; j < array.length; j++){
            if (array[j] < array[pivot]){ // Here we move all numbers less than pivot in front of pivot
                [array[j], array[lessThan]] = [array[lessThan], array[j]];
                lessThan++;
            }
        }
        numSort[lessThan-1] = 1; // Marks where pivot ends up as in place
        [array[pivot], array[lessThan - 1]] = [array[lessThan - 1], array[pivot]]; // Here we switch pivot with the last number
    }                                                                              // smaller, pivot is in the right place.
    return array;
}









