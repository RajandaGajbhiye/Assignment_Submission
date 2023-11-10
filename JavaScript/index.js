function Descending(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements if they are in the wrong order (ascending order)
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const array = [5, 1, 2, 7, 5, 6]; 
const sortedArray = Descending(array);
console.log("Sorted array in descending order ->  " + sortedArray);
