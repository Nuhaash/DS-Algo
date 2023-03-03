let array = [10, 20, 5, 15, 25, 45, 100]
const target = 45;

function LinearSearch(array, target){
    for(let i=0; i< array.length; i++){
        if(array[i] === target){
            return `${target} is found in ${i}`
        }
    }

    return 'Not Found';
}
console.log(LinearSearch(array, target));