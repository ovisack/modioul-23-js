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
  console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
  console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
  ))
  console.log(calculateFinalScore("hello" ))
  console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }))
  