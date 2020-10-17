module.exports = function toReadable (number) {
      let resStr='';
      let num=number;
      let firstNum=Math.trunc(num/100);
      let secondNum=Math.trunc(num%100/10);
      let thirdNum=Math.trunc(num%10);
      let secAndThird=Math.trunc(num%100);
    
      if(firstNum!=0){
     // console.log('тысячные');
           resStr+=simpleNumber(firstNum)+' hundred';
  
           if(secondNum!=0){
             if(secAndThird>=10 && secAndThird<=19){
                resStr+=' '+tenthsNumberIncl(secAndThird);
              }
              else{
                 resStr+=' '+tenthsNumber(secondNum);
                  if(thirdNum!=0){
                    resStr+=' '+simpleNumber(thirdNum);
                  }
              }
             
            }
          else {
            if(thirdNum!=0){
                resStr+=' '+simpleNumber(thirdNum);
            }
          }
      }
      else if(secondNum!=0){
        if(secAndThird>=10 && secAndThird<=19){
          resStr+=tenthsNumberIncl(secAndThird);
        }
        else{
          if(thirdNum==0){
            resStr+=tenthsNumber(secondNum);
          }
          else{
             resStr+=tenthsNumber(secondNum)+' '+simpleNumber(thirdNum);
          }
        }
        
      }
      else if(secAndThird>=10 && secAndThird<=19){
        resStr+=tenthsNumberIncl(secAndThird);
      }
      else {
        resStr+=simpleNumber(thirdNum);
      }
      return resStr;
  
      function simpleNumber(num){
      switch(num){
              case 1: return 'one';
              case 2: return 'two';
              case 3: return 'three';
              case 4: return 'four';
              case 5: return 'five';
              case 6: return 'six';
              case 7: return 'seven';
              case 8: return 'eight';
              case 9: return 'nine';
              default: return 'zero';
          }
      }
  
      function tenthsNumber(num){
      switch(num){
              case 1: return 'ten';
              case 2: return 'twenty';
              case 3: return 'thirty';
              case 4: return 'forty';
              case 5: return 'fifty';
              case 6: return 'sixty';
              case 7: return 'seventy';
              case 8: return 'eighty';
              case 9: return 'ninety';
              default: return 'zero';
          }
      }
      function tenthsNumberIncl(num){
      switch(num){
              case 10: return 'ten';
              case 11: return 'eleven';
              case 12: return 'twelve';
              case 13: return 'thirteen';
              case 14: return 'fourteen';
              case 15: return 'fifteen';
              case 16: return 'sixteen';
              case 17: return 'seventeen';
              case 18: return 'eighteen';
              case 19: return 'nineteen';
              default: return 'zero';
          }
      }
  }  

