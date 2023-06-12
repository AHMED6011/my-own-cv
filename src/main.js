import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

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
  faSass,
  faTelegram,
  faTwitter,
  faWhatsapp
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
  faTelegram
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())

app.use(router)

app.mount('#app')

//! Animation on Scroll OR on Load

app.use(MotionPlugin, {
  directives: {
    'enter-right': {
      initial: {
        opacity: 0,
        x: -500
      },
      enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 700 }
      }
    },
    'enter-left': {
      initial: {
        opacity: 0,
        x: 500
      },
      enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 700 }
      }
    },
    'visible-left': {
      initial: {
        opacity: 0,
        x: 200
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 700 }
      }
    },
    'visible-right': {
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
