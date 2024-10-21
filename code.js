function permutationSort(a) {
    //Check to see if array is sorted
    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) { 
            //If a is greater than another. It is not sorted. 
            if ([a-1] > arr[i]) {
                return false;
            }
        }
        return true; 
}

function genPerm(arr) { 
    //Has 1 element return array
    if (arr.length === 1) {
        return [arr.slice()];
    } 

    const permutations = []; //Store permutations
    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]; //get current element
        const remaining = arr.slice(0,i).concat(arr.slice(i + 1)); //new array with all but the current
        const remainingPerm = genPerm(remaining); //Recursively gen perm for remaining elements

        for (const perm of remainingPerm) {
            permutations.push([current].concat(perm)); //Add current to the front of each Perm of the remaining elements
        }
    }

    return permutations; 
}
    //gen all possible perm for input
    const permutations = genPerm(a); 
    let count = 0; 
    //loop for each Perm
    for (const permutations of permutations) {
        count++; // count for each Perm
        // Check if current is sorted
        if (isSorted(permutation)) {
            for (let i =0; i < a.length; i++) { 
                a[i] = pemutation[i]; 
            }
            //Return for perm tried on sorting
            return count; 
        }
    }
    // return total number
    return count; 
}





