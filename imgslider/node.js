let counter =0;
let max = document.querySelectorAll(".imgs").length;
let arrow_right = document.querySelector(".bi-arrow-right");
let arrow_left = document.querySelector(".bi-arrow-left");
let images = document.querySelector(".images");
let slider = document.querySelector(".slider");
let imgarray = [...document.getElementsByClassName("imgs")]
// let img1=document.getElementById("f1");

// let img2=document.getElementById("f2");

// let img3=document.getElementById("f3");

// let img4=document.getElementById("f4");





    arrow_right.addEventListener("click",function(){
       if (counter<max-1) {
        counter++;
        images.style.right=506*counter+"px";
      
        console.log(counter+1+". sayfadasınız");
        
       }else {
        counter=0;
        images.style.right=506*counter+"px";
       
        console.log(counter+1+". sayfadasınız");
        
       }

    });

    arrow_left.addEventListener("click",function(){
       
      
        if (counter==0) {
           
            counter=max-1;
            console.log(counter+1+". sayfadasınız");
         images.style.right=506*counter+"px";
       
     
         
        }
        else if(counter>1) {
            console.log(counter+". sayfadasınız");
           counter--;
          
            images.style.right=506*counter+"px";
         
         
        }
        else if (counter==1) 
        { 
            console.log(counter+". sayfadasınız");
            counter=0;
            images.style.right=506*counter+"px"; 
        }
          
 
     });
    

     
    
    
 for (let index = 0; index < imgarray.length; index++) {
    imgarray[index].addEventListener("click",function(){
        images.style.right=506*index+"px";
    });
    
 }
        
    






