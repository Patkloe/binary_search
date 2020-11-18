// iterative
function search_val(tab,c){
  var deb = 0;
  var fin = tab.length - 1;
  var mid = 0;
  while(deb <= fin){
     alert(deb +  " " + fin);
    if((deb >= fin)&&(tab[mid]!= c)){
       console.log("Not found");
     return -1;
    }
    mid = Math.floor((deb + fin)/2);
    if(tab[mid] == c){
      console.log("Found");
    return mid;
    }
    if(tab[mid] > c){
        fin = mid;
    }
    else{
        deb = mid + 1;
    }
  } // fin while
 }
var tab = [1,2,3,4,5,6,7];
search_val(tab,8);
