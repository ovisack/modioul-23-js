function aum(num){
    //let number= chak[chak.length -1]
    
 //console.log(number);
 let number= num.slice(-1).toLowerCase()
 let rejalt=false ;
 let chakArry=['a', 'o','i', 'y','e','u','w',];

 for(let char of chakArry ){
    if(char === number){
rejalt =true

    }
   

}
 return rejalt ? 'good name' :'bad name'
}

console.log(aum('jhuE'))
console.log(aum('jh'))