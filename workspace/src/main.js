import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
// import VueScrollmagic from 'vue-scrollmagic'


createApp(App).mount('#app')


gsap.registerPlugin(ScrollTrigger)
const elements = document.querySelectorAll('.animate')

elements.forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: "center 110%",
            end: "center 60%",
            // toggleActions: "play resume reverse",
            scrub: 1,
        },
        x: 0,
        opacity: 1,
        ease: "easy-in"
    })

})
