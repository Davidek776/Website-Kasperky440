import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

createApp(App).mount('#app')

const elements = document.querySelectorAll('.animate')
document.addEventListener('scroll', () => {
    throttle(() => {
        console.log('a');
        elements.forEach(element => {
            if(! element.classList.contains('animate-element')) {
                if(window.scrollY + window.innerHeight > element.offsetTop + (window.innerHeight * 0.3) ) {
                    element.classList.add('animate-element')
                }
            }
        })

    }, 500);
    
})

//initialize throttlePause variable outside throttle function
let throttlePause;
 
const throttle = (callback, time) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;
 
  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;
   
  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();
     
    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};