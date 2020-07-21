// iterative
function binary_search(tab,c){
 var deb = 0;
 var fin = tab.length - 1;
 var mid = 0;
 //if( deb > fin) return -1;
 while (deb <= fin){
    alert(deb);
    if( deb >= fin){
   alert("not found");
    return -1;
    }
    mid = Math.floor((deb + fin)/2);
  if(tab[mid === c]){
    return mid;
  }
  if(tab[mid] < c){
   deb = mid +1;
  }
  else{
   fin = mid - 1;
  }
 }
}
var tab = [1,2,3,4,5,6,7,8,9];
binary_search(tab,10);