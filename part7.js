
  
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

 



console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));

console.log(sendNotification('nadim.naem5@outlook.com'));

console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));


    
