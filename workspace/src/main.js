import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import VueGoogleMaps from '@fawmi/vue-google-maps'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

//import font-awesome icons
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCircleDown)

const app = createApp(App);
app
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAmwDchKVnv86KG03SDr-u2nAtJP6KtxwA',
    },
})
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


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
