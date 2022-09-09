import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

createApp(App).mount('#app')

const elements = document.querySelectorAll('.animate')
document.addEventListener('scroll', () => {

    console.log(elements[1].offsetHeight);
    elements.forEach(element => {
        if(! element.classList.contains('animate-element')) {
            if(window.scrollY + window.innerHeight > element.offsetTop + (window.innerHeight * 0.3) ) {
                element.classList.add('animate-element')
            }
        }
    })
    
})