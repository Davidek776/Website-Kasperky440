import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

createApp(App).mount("#app");

const elements = document.querySelectorAll('.animate')
document.addEventListener('scroll', () => {

    elements.forEach(element => {
        if(window.scrollY + window.innerHeight > element.offsetTop + (window.innerHeight * 0.3)) {
            element.classList.add('animate-element')
        }
    })
    
})