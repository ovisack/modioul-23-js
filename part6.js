 function  calculateTax(income, expenses) {
  if(income <0){
    return 'Invalid Input'

  }
  if(expenses <0){
    return 'Invalid Input'

  }
 let total = income -expenses;
      let jok= total*.20;
    return jok;

 }

console.log(calculateTax(10000, 3000));




 console.log(calculateTax(34000, 1753));
   console.log(calculateTax(5000, 1500));

   console.log(calculateTax(7000, 7000));
   

   console.log(calculateTax(-5000, 2000));
   console.log(calculateTax(6000, -1500));