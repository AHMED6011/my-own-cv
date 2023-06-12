<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const targetR = ref()
useMotion(targetR, {
  initial: {
    opacity: 0,
    x: -500
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1000 }
  }
})

const targetL = ref()
useMotion(targetL, {
  initial: {
    opacity: 0,
    x: 500
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1000 }
  }
})
</script>

<template>
  <div class="container-fluid d-flex justify-content-center overflow-hidden">
    <div class="skills">
      <div class="content py-5">
        <ul class="skills list-unstyled">
          <p></p>
          <li class="skill py-4">
            <div v-motion-enter-left>
              <h3 class="" style="color: #e8612d">
                <font-awesome-icon icon="fa-brands fa-html5" />
                Html
              </h3>
              <p class="">
                (HyperText Markup Language) is the most basic building block of the Web. It defines
                the meaning and structure of web content.
              </p>
            </div>
          </li>
          <li class="skill py-4">
            <div v-motion-enter-right>
              <h3 class="" style="color: #214ce5">
                <font-awesome-icon icon="fa-brands fa-css3" />
                Css
              </h3>
              <p class="">
                cascading Style Sheets (CSS) is a stylesheet language used to describe the
                presentation of a document written in HTML or XML (including XML dialects such as
                SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on
                paper, in speech, or on other media.
              </p>
            </div>
          </li>
          <li class="skill py-4">
            <div v-motion-enter-left>
              <h3 style="color: #ecd63f">
                <font-awesome-icon icon="fa-brands fa-js" />
                JavaScript
              </h3>
              <p class="">
                JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming
                language with first-class functions.
              </p>
            </div>
          </li>
          <li class="skill py-4">
            <div v-motion-visible-right>
              <h3 class="" style="color: #c76494">
                <font-awesome-icon icon="fa-brands fa-sass" />
                Scss
              </h3>
              <p class="">
                SCSS is the most mature, stable, and powerful professional grade CSS extension
                language in the world..
              </p>
            </div>
          </li>
          <li class="skill py-4">
            <div v-motion-visible-left>
              <h3 class="" style="color: #7430f9">
                <font-awesome-icon icon="fa-brands fa-bootstrap" />
                Bootstrap
              </h3>
              <p class="">
                Bootstrap utilizes Sass for a modular and customizable architecture. Import only the
                components you need, enable global options like gradients and shadows, and write
                your own CSS with our variables, maps, functions, and mixins.
              </p>
            </div>
          </li>
          <li class="skill py-4">
            <div v-motion-visible-right>
              <h3 style="color: #999">
                <font-awesome-icon icon="fa-brands fa-github" />
                Git & Github
              </h3>
              <p class="">
                Git is a free and open source distributed version control system designed to handle
                everything from small to very large projects with speed and efficiency & Github is
                an Internet hosting service for software development and version control using Git.
              </p>
            </div>
          </li>
          <li>
            <h1 class="">Always In Progress</h1>
            <!-- <i class="fa-solid fa-spinner"></i> -->
            <font-awesome-icon icon="fa-solid fa-spinner" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$pink-col: #f7c8e9;
$purple-col: #9191f6;
$pink-light: #eeeeee85;
$grey-light: #eee;
.skills {
  width: 75%;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > p {
    margin: 0;
    width: 50%;
    border-bottom: 1px solid $pink-col;
  }

  & li {
    border-left: 1px solid $pink-col;
    border-bottom: 1px solid $pink-col;
    border-bottom-left-radius: 5px;

    &:nth-child(odd) {
      border-right: 1px solid $pink-col;
      border-bottom: 1px solid $pink-col;
      border-left: 0;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0;
    }

    & h3 {
      padding: 0 15px 15px;
      font-size: 30px;
    }

    & p {
      padding: 0 15px 15px;
      font-size: 20px;
      color: $pink-col;
    }
  }

  & li:last-child {
    position: relative;
    padding-bottom: 30px;
    border-bottom-left-radius: 0;
    border-bottom: 0;
    & h1 {
      font-size: 27px;
      padding: 15px 15px 0 25px;
      color: $purple-col;
    }

    & svg {
      color: $pink-col;
      font-size: 20px;
      position: absolute;
      bottom: -22px;
      left: -10px;
      animation: rotatign 1s ease-in-out forwards infinite;
    }
  }
}

@keyframes rotatign {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .skills {
    width: 100%;
  }
}
</style>
