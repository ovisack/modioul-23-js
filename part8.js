function checkDigitsInName(name) {
if (typeof name !=='string') {
  return 'Invalid Input';
}
     let number= name.slice(-4,-3).slice(-1).toLowerCase();
    let number1= name.slice(-1).toLowerCase();
     let number2= name.slice(-6,-5).toLowerCase();
  
  
    let chakArry=['0', '1','2', '3','4','5','6','7','8','9'];
    let rejalt=false ;
    for(let char of chakArry ){
       if(char==number ){
  rejalt =true;
    
   
     }
     if(char==number1){
      rejalt =true ;
     }
     if(char==number2){
     rejalt=true ;
     }
   
           
          }               
      
     return rejalt ? 'true' :'false';
  }
   
console.log(checkDigitsInName('Raj123'))
 console.log(checkDigitsInName('n9ayeem'))
 console.log(checkDigitsInName('e1mu3'))
 console.log(checkDigitsInName('Suman'))
 console.log(checkDigitsInName('Name2024'))
 console.log(checkDigitsInName('!@#'))
 console.log(checkDigitsInName(["Raj"]))
