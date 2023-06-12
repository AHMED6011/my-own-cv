<template>
  <main>
    <!-- Start Landing  -->
    <div class="container-fluid pt-5">
      <div class="row pt-3">
        <div
          class="col-md-6 overlfow-hidden col-lg-4 d-flex flex-column justify-content-center align-items-start"
        >
          <div
            v-motion-enter-right
            class="text-content text-center text-sm-start ms-sm-5 fs-3 pb-3"
          >
            <div class="text-light">
              <span class="d-block">I'm</span>
              <span class="typing" ref="typed"></span>
            </div>
            <div class="custom-carousel">
              <div id="" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <p class="text-light fs-4 pt-5">
                      A front-end development platform that employs the latest tools & technologies
                      in your project.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="text-light fs-4 pb-5 pb-sm-0 pt-5">
                      websites building, have your website that will be built from scratch as you
                      want.
                    </p>
                  </div>
                  <div class="carousel-item">
                    <p class="text-light fs-4 pt-5">
                      add, modify, and delete sections from your website or replace the current
                      design with another else.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-outline-info">
              <RouterLink to="/contact" class="text-decoration-none text-light"
                >Order Now</RouterLink
              >
            </button>
          </div>
        </div>
        <div class="pt-5 overflow-hidden d-none d-sm-flex col-md-6 col-lg-8">
          <img v-motion-enter-left class="w-100" src="../assets/images/land1.png" alt="land" />
        </div>
      </div>
    </div>
    <!-- End Landing  -->

    <!-- Start Our Services -->
    <div class="our-Services">
      <h2 class="text-center text-light pb-5">Our Services</h2>
      <div class="container overflow-hidden">
        <div v-motion-visible-left class="row service justify-content-center">
          <div class="card text-light custom-card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/images/serv_1.png"
                  class="img-fluid rounded-start"
                  alt="Services"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-center text-sm-start">
                  <h5 class="card-title pb-3 fs-3">Html Email Template</h5>
                  <p class="card-text">
                    View Your Company Services Simply, And Contact Details Using Your Promo Email
                    Template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-motion-visible-right class="row service justify-content-center">
          <div class="card text-light custom-card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/images/serv_2.png"
                  class="img-fluid rounded-start"
                  alt="Services"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-center text-sm-start">
                  <h5 class="card-title pb-3 fs-3">Keyboard Shortcuts Extension</h5>
                  <p class="card-text">
                    Save Your Time By Getting A Custom Extension That Does Your Repetitive Tasks And
                    Gives You Shorthands On A Specific Website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-motion-visible-left class="row service justify-content-center">
          <div class="card text-light custom-card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/images/serv_3.png"
                  class="img-fluid rounded-start"
                  alt="Services"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-center text-sm-start">
                  <h5 class="card-title pb-3 fs-3">Custom Browser Extension</h5>
                  <p class="card-text">
                    Be More Connected With Your Clients By Getting An Extension That Gives Some
                    Methods Related With Your Website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-motion-visible-right class="row service justify-content-center">
          <div class="card text-light custom-card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/images/serv_4.png"
                  class="img-fluid rounded-start"
                  alt="Services"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-center text-sm-start">
                  <h5 class="card-title pb-3 fs-3">Landing Page</h5>
                  <p class="card-text">
                    Have A Landing Page, And Use Its Power To Help Drive Users To Your Webinars And
                    Online Events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Our Services -->
  </main>
</template>

<script>
import Typed from 'typed.js'

export default {
  data() {
    return {
      texts: ['Ahmed Allawi', 'A Front-end Developer', 'Designer', 'A Freelancer'],
      typed: null
    }
  },
  mounted() {
    const options = {
      strings: this.texts,
      typeSpeed: 75,
      loop: true
    }

    this.typed = new Typed(this.$refs.typed, options)
  },
  beforeUnmount() {
    if (this.typed) {
      this.typed.destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
.typing {
  color: #f7c8e9;
}

.typed-cursor {
  margin-left: 5px;
}

.service {
  &:nth-child(even) {
    direction: rtl;
  }

  & .custom-card {
    border: none;
    width: 85%;
    background-color: transparent;
  }
}
</style>
