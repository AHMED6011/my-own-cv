<template>
  <main class="position-relative">
    <header class="custom-header" :class="{ 'sidebar-open': !opened }">
      <nav class="navbar custom-navbar navbar-expand-xxl">
        <div>
          <p class="navbar-brand fs-4">
            <span class="px-2 fw-medium me-3 bg-light rounded">CV</span>
            <span @click="toTop" class="fw-bold text-light">Ahmed A A A</span>
          </p>
          <div class="pt-4 custom-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li @click="closed" class="nav-item">
                <RouterLink class="nav-link" to="/">
                  <font-awesome-icon icon="fa-house" />
                  <span>Home</span>
                </RouterLink>
              </li>
              <li @click="closed" class="nav-item">
                <RouterLink class="nav-link" to="/skills">
                  <font-awesome-icon icon="fa-pen-ruler" />
                  <span>Skills</span>
                </RouterLink>
              </li>
              <li @click="closed" class="nav-item">
                <RouterLink class="nav-link" to="/projects">
                  <font-awesome-icon icon="fa-project-diagram" />
                  <span>Projects</span>
                </RouterLink>
              </li>
              <li @click="closed" class="nav-item">
                <RouterLink class="nav-link" to="/about">
                  <font-awesome-icon class="ps-2 me-1" icon="fa-info" />
                  <span>About</span>
                </RouterLink>
              </li>
              <li @click="closed" class="nav-item">
                <RouterLink class="nav-link" to="/contact">
                  <font-awesome-icon icon="fa-envelope" />
                  <span>Contact</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <button
      :class="{ 'trans-sm ': opened }"
      @click="toggleSidebar"
      class="btn border-0 custom-togller-btn"
    >
      <font-awesome-icon :class="{ trans: opened }" icon="fas-double fa-angle-double-left" />
    </button>
    <div class="overly" :class="{ visible: !opened }" @click="toggleSidebar"></div>
  </main>
</template>

<script>
import { useStore } from '../../stores/globalVar'

export default {
  name: 'SideBar',
  data() {
    return {
      opened: useStore().isOpen
    }
  },

  methods: {
    toggleSidebar() {
      this.opened = !this.opened
      document.body.style.overflow = !this.opened ? 'hidden' : 'auto'
    },
    closed() {
      this.opened = true
      document.body.style.overflow = 'auto'
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.overly {
  width: 100% !important;
  height: 100% !important;
  background-color: #00000070;
  position: fixed;
  z-index: 2 !important;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}
.visible {
  opacity: 1;
  visibility: visible;
}
.custom-header {
  position: fixed;
  width: 50px;
  min-height: 100vh;
  background-color: #00000070;
  backdrop-filter: blur(5px);
  z-index: 3;
  transition: 0.5s ease-in-out;
  overflow: hidden;

  .custom-navbar {
    height: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  &.sidebar-open {
    width: 250px;
  }

  .custom-collapse ul {
    display: flex;
    flex-direction: column;

    a {
      min-width: 150px;
      padding: 10px;
      padding-left: 15px;
      margin: 5px 5px;
      border-radius: 10px;
      transition: 0.3s;
      color: #fff;
      border-radius: 6px;

      svg {
        font-size: 20px;
        padding-right: 20px;
      }

      &:hover {
        background-color: #eeeeee85;
      }

      &.router-link-exact-active {
        background-color: #eee;

        span {
          font-weight: bold;
          padding-left: 5px;
          transform: scale(1.1);
        }

        & {
          color: #9191f6;
        }
      }

      span {
        display: inline-block;
        transition: 0.3s;
      }
    }
  }
}

.custom-togller-btn {
  position: fixed !important;
  left: -5px !important;
  top: 580px !important;
  width: 55px;
  z-index: 1100;
  transition: 0.5s;
  font-size: 22px;
  color: #fff;

  svg {
    transition: 0.5s;
    &.trans {
      transform: rotate(180deg);
    }
  }
}

@media (max-width: 767px) {
  .custom-header {
    width: 0px !important;
    &.sidebar-open {
      width: 220px !important;
    }
  }

  .trans-sm {
    background-color: #00000070;

    svg {
      animation: blink 2s infinite;
    }
  }
}

@keyframes blink {
  30% {
    opacity: 0.4;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0.4;
  }
}
</style>
