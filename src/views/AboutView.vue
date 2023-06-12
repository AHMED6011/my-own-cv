<template>
  <div class="content overflow-hidden">
    <div class="about">
      <div class="container">
        <div class="row overflow-hidden justify-content-center align-items-center">
          <div class="col-12 custom-bg-img text-center"></div>
          <div class="row custom-content justify-content-around">
            <div class="col-7 img-holder text-center col-sm-5">
              <img
                v-motion-enter-right
                src="../assets/images/myphoto.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div v-motion-enter-left class="col-4 col-sm-5 custom-text">
              <p>Ahmed Allawi</p>
              <p>Front-end Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Skills Section-->
    <div v-motion-enter-right class="about-me pb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-6 col-lg-6 p-0">
            <h3>Overview</h3>
            <p>
              <!-- <i class="fa-solid fa-house fa-lg"></i> -->
              <font-awesome-icon class="pe-2" icon="fa-solid fa-house" />
              Syrian, Deer Al Zour
            </p>
            <p>
              <font-awesome-icon class="pe-2 ps-1" icon="fa-solid fa-location-dot" />
              Turkey,Gaziantep
            </p>
            <p>
              <font-awesome-icon class="pe-2" icon="fa-solid fa-envelope" />
              ahmedallawi020@gmail.com
            </p>
            <ul class="list-inline links-list text-center pt-3">
              <li class="list-inline-item pe-4">
                <a target="_blank" href="https://www.instagram.com/ahmed1allawi/">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" href="https://www.linkedin.com/in/ahmed-allawi-608994241/">
                  <font-awesome-icon icon="fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-8 col-md-6 col-lg-6 p-0">
            <h3>Bio</h3>
            <p>
              I'm Ahmed Allawi, a front-end developer with a focus on VueJs . I've built projects
              showcasing my skills in after a year of self-study and And learn in centers such as
              Hsoub and Duplus. I'm Dedicated To Building User-Interactive Websites That Run
              Smoothly. I take pleasure in giving back to the web development community while
              continuing to learn and stay current. I research new technologies and work on side
              projects in my free time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$pink-col: #f7c8e9;
$purple-col: #9191f6;
$pink-light: #eeeeee85;
$grey-light: #eee;
.about {
  height: 350px;
  position: relative;
  & .custom-bg-img {
    width: 80%;
    padding: 100px 0 200px;
    background-image: url(../assets/images/keyboard.webp);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 50%;
    border-radius: 20px;
    transform: translate(50%, -30%);
  }

  .custom-content {
    position: absolute;
    top: 0;
    & .img-holder img {
      height: 85%;
      border-radius: 50%;
      padding: 5px;
      border: 2px solid $purple-col;
    }

    & .custom-text {
      font-size: 22px;
      padding-bottom: 30px;
      color: white;
      display: flex;
      justify-content: end;
      align-items: start;
      flex-direction: column;
    }
  }
}

.about-me {
  .container {
    width: 70%;
    color: white;

    & h3 {
      border-bottom: 1px solid white;
      padding-bottom: 10px;
    }

    & p {
      padding-top: 10px;
      margin-bottom: 10px;
    }

    & .links-list li {
      &:first-child {
        & svg {
          color: #f541c0;
        }
      }
      &:last-child {
        & svg {
          color: #417ef5;
        }
      }
      & svg {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    height: 300px;

    .custom-bg-img {
      width: 100%;
      transform: translate(50%, -55%);
    }

    .custom-content {
      top: 62px !important;

      & .img-holder {
        padding-left: 30px;
      }

      & .custom-text {
        padding-left: 10px;
        padding-bottom: 20px !important;
        & p {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
