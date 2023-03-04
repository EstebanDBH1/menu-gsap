// WITHOUT defaults (long)

let menu = document.querySelector('.menu')
let close = document.querySelector('.close')



menu.addEventListener('click', ()=>{
 
 



gsap.to('.lista',{
  
  y: 0,
  ease: Power4.easeOut, 
  duration: 1
  
  
})


 gsap.to('.link a',  {
   y: 0,
   ease: Power3.easeOut, 
   duration: 3
   
 })
 
 gsap.to('.wrapper', {
   
   
   duration: 3,
   x: "-100%"
   
 })
 
 
 
 
 
 
 
  
  
})



close.addEventListener('click', ()=>{
  
  gsap.to('.lista',{
  
  y: "100%",
  ease: Power4.easeOut, 
  duration: 8
  
  
})


 gsap.to('.link a',  {
   y: "100%",
   ease: Power3.easeOut, 
   duration: 1
   
 })
 
 gsap.to('.wrapper', {
   
   
   duration: 1,
   x: "0"
   
 })
 
  
  
  
  
})