// !------------BINARY SEARCH ALGO----------!


let arr2 = [10, 20, 30, 40, 50, 60, 70, 80];


function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;
    let mid;


while(start <= end){
    mid = Math.floor((start+end)/2);

    if(arr[mid] === target){
        return "Data found at index no "  + mid;
    }
    else if(arr[mid] < target){
        start = mid+1;
    }
    else{
        end = mid-1;
    }
}
    return "Data not found";
}

console.log(binarySearch(arr2, 60));



var Search = function(nums, target){
    let start = 0;
    let end = nums.length-1;
    let mid;

    while (start <= end){
        mid = Math.floor((start+end)/2);

        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return -1;

};


