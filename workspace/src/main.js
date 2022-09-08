import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

createApp(App).mount("#app");

const elements = document.querySelectorAll('.animate')
document.addEventListener('scroll', () => {

    elements.forEach(element => {

        if(! element.classList.contains('animate-element')) {

            if(window.scrollY > element.offsetTop) {
                element.classList.add('animate-element')
            }
        }

    })
    
})