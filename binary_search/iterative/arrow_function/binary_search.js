// iterative
check_number = (tab,s) =>{
 var deb = 0;
 var fin = tab.length - 1;
 //var mid = Math.floor((deb + fin)/2);
  while(deb <= fin){
   var mid = Math.floor((deb + fin)/2);
   alert("valeurs deb : " + " "+deb + "fin : " + " "+fin);
   if((deb >= fin) && (tab[mid]!==s)) return "not found" + " " + -1;
   if(tab[mid] === s) return "find at index :" + " "+ mid;
   if(tab[mid] < s){
    deb = mid + 1;
   }
   else{
    fin = mid - 1;
   }
  } 
}
var tab = [1,2,3,4,5,6,7,8,9];
check_number(tab,7);
