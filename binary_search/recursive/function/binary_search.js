/******************************************************/
let recursiveFunction = function (arr, x, start, end) { 
//var res = -1;      
    // Base Condition 
    if (start > end) return -1 /*false*/; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (arr[mid]===x) return  mid/*true*/; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(arr[mid] > x)  
        return recursiveFunction(arr, x, start, mid-1); 
    else 
  
        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return recursiveFunction(arr, x, mid+1, end); 
}  
   
// Driver code 
let arr = [1, 3, 5, 7, 8, 9]; 
let x = 9; 
   
if (recursiveFunction(arr, x, 0, arr.length-1) > 0) 
    alert("Element found! index :" +" " + recursiveFunction(arr, x, 0, arr.length-1)); 
else 
    alert("Element not found! :" + " " + recursiveFunction(arr, x, 0, arr.length-1)); 
/*   
x = 9; 
   
if (recursiveFunction(arr, x, 0, arr.length-1)) 
    alert("Element found!<br>"); 
else 
    alert("Element not found!<br>");*/