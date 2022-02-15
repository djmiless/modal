    const contactUs = document.querySelector(".nav-item-parent")
    const subNav = document.querySelector(".sub-nav");
    const main = document.querySelector(".main");
    const aboutUs = document.querySelector(".nav-item-parent1")
    const subNav1 = document.querySelector(".sub-nav1")
    const loginWrap = document.querySelector(".login-wrap")




    contactUs.onmouseover = function(){
        subNav.style.display = 'block';
    }

    contactUs.onmouseleave = function(){
        subNav.style.display = 'none';
    }   

   document.body.addEventListener("click", function(){
     subNav.style.display = 'none';
   }, true)



   aboutUs.onmouseover = function(){
       subNav1.style.display = 'block';
   }

   aboutUs .onmouseleave = function(){
       subNav1.style.display = 'none';
   }

   document.body.addEventListener("click", function(){
        subNav1.style.display = 'none';
   }, true)


//    window.onclick(e){
//        if(loginWrap.target == loginWrap){
//         loginWrap   .style.display = "none";
//        }
//    }