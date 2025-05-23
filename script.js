const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
})
// Close menu when close button clicked
menuCloseButton.addEventListener("click",()=>{
    menuOpenButton.click()
})

const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
   
    loop: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            sliderPerView:2
        },
        768:{
            slidesPerView:2
        },1024:{
            slidesPerView:3
        }
    }
  
    
  });