num1=11
document.getElementById("num1-el").textContent=num1
// let a=document.getElementById("btn2")
function plusone(){
    
   num1+=1
  document.getElementById("num1-el").textContent = num1;
   console.log(num1)
        
        }
 function plustwo(){
 num1+=2
 document.getElementById("num1-el").textContent = num1;
 }
  function plusfour(){
    num1+=4
    document.getElementById("num1-el").textContent = num1;
  }
 plusone()
 plustwo()
 plusfour()
 
 guestnum=12
 document.getElementById("num2-el").textContent=guestnum
 function one(){
    guestnum+=1
    document.getElementById("num2-el").textContent=guestnum
 }
 function two(){
     guestnum+=2
      document.getElementById("num2-el").textContent = guestnum;
       }
 function four(){
        guestnum+=4
            document.getElementById("num2-el").textContent = guestnum;
              }
 
 
 one()
 two()
 four()