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



   function sendNotification(email){
    if(email.indexOf('@')===-1){
     return "Invalid Email"
    }
  let part=email.split('@');
  
  let username =part[0];
  let domain= part[1];
  
  
   const sum= username+ " sent you email from"+domain;
   return sum ;
  
   }


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



      function calculateFinalScore(obj) {
  
  
 
        if (typeof obj !=="object"){
                    return 'Invalid Input';
                  }
         let total_marks =obj.testScore+ obj.schoolGrade;
              
        if(obj.isFFamily){
          total_marks=total_marks +(total_marks *0.20)
          
        }
        if(obj.isFFamily && total_marks >=80){
          return true;
      
        }else if(obj.isFFamily && total_marks<=80 ){
          return false;
        }else if(!obj.isFFamily && total_marks >=80){
          return true;
        }
        else if(!obj.isFFamily && total_marks<80){
          return false;
        }
      
        
        
        
        }




        function  waitingTime(waitingTimes  , serialNumber) {
            if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length){
                return 'invalid Input';
            } 
            let totalTimes = 0;
            for(let waitingTime of waitingTimes){
                totalTimes += waitingTime;
            }
            let remainingStudents = serialNumber - waitingTimes.length - 1;
            let avgTime = Math.round(totalTimes / waitingTimes.length);
            let remainingTime = remainingStudents * avgTime;
            return remainingTime;
        }
        