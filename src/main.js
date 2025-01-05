import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

import { MotionPlugin } from '@vueuse/motion'

import { library } from '@fortawesome/fontawesome-svg-core'

// Import 'brands' icons to the project

import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faNodeJs,
  faSass,
  faTelegram,
  faTwitter,
  faVuejs,
  faWhatsapp,
  faDiaspora
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import 'solid' icons to the project

import {
  faAngleDoubleLeft,
  faAngleLeft,
  faArrowUpRightFromSquare,
  faEnvelope,
  faHouse,
  faInfo,
  faLocationDot,
  faPenRuler,
  faProjectDiagram,
  faSpinner,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'

// add icons to the library
library.add(
  faTwitter,
  faUserSecret,
  faAngleLeft,
  faAngleDoubleLeft,
  faHouse,
  faPenRuler,
  faProjectDiagram,
  faInfo,
  faEnvelope,
  faGithub,
  faArrowUpRightFromSquare,
  faSpinner,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJs,
  faLocationDot,
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faTelegram,
  faVuejs,
  faNodeJs,
  faDiaspora
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())

app.use(router)

app.mount('#app')

app.config.globalProperties.isOpen = true

//! Animation on Scroll Or on Load

app.use(MotionPlugin, {
  directives: {
    'visibleR-right': {
      initial: {
        opacity: 0,
        x: -200
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 700 }
      }
    }
  }
})
