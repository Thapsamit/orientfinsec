const menuIcon = document.querySelector(".menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")
const dropDownMenu = document.querySelector(".dropdown-menu")
const dropDownMenuItems =  document.querySelector(".dropdown-menu-items")
const toggleUp = document.querySelector(".toggleUp")
const header = document.querySelector("header")


dropDownMenu.addEventListener("click",(e)=>{
   
    if(dropDownMenuItems.style.display == "block"){
        dropDownMenuItems.style.display = "none"
    }
    else{
        dropDownMenuItems.style.display = "block"
        dropDownMenu.style.color = 'rgba(137, 15, 13, 1)';
    }
    
})

menuIcon.addEventListener("click",()=>{
      if(!mobileMenu.classList.contains("active")){
          mobileMenu.classList.add("active")
          menuIcon.classList.remove("fa-bars")
         
          menuIcon.classList.add("fa-xmark")
        
      }
      else{
          mobileMenu.classList.remove("active")
          
          menuIcon.classList.remove("fa-xmark")
          menuIcon.classList.add("fa-bars")
       
      }
})
document.addEventListener("scroll",()=>{
    
    if(window.scrollY==0){
        toggleUp.style.display = "none";
    }
    else{
        toggleUp.style.display = "block";
    }
    
    header.classList.toggle("sticky",window.scrollY>0);
})

toggleUp.addEventListener("click",()=>{
    window.scrollTo(0,0);
})
// counter 
