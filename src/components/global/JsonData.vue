<template>
  <!-- <div class="data-projects"> -->
  <div class="col-lg-4 col-md-6 col-sm-10 g-4">
    <div class="project position-relative">
      <img class="img-fluid img" :src="img" alt="Project" />
      <div class="overlay position-absolute">
        <h4 v-motion-visible-right>
          {{ title }}
        </h4>
        <p class="m-0" v-motion-visible-right>
          {{ prag }}
        </p>
        <ul v-motion-visible-right class="list-inline m-0">
          <li v-for="lang in langMade" :key="lang" class="list-inline-item">
            {{ lang }}
          </li>
        </ul>
        <div v-motion-visible-right class="links d-flex justify-content-end">
          <span class="me-2">
            <a id="github" :href="githubLink" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </span>
          <span>
            <a id="site" :href="siteLink" target="_blank">
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ['img', 'title', 'prag', 'langMade', 'githubLink', 'siteLink'],
  name: 'JsonData'
}
</script>

<style lang="scss" scoped>
$pink-col: #f7c8e9;
$purple-col: #9191f6;
$pink-light: #eeeeee85;
$grey-light: #eee;
.projects {
  & h2 {
    font-size: 35px;
    color: $pink-col;
    padding-bottom: 25px;
  }

  .project {
    overflow: hidden;
    & img {
      border-radius: 10px;
    }

    & .overlay {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background-color: #130429c9;
      backdrop-filter: blur(5px);
      border-radius: 10px;
      padding: 15px;
      top: 0;
      right: 0;
      transition: 0.5s;
      transform: rotate3d(0, 0, 1, 90deg);
      transform-origin: right top;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      & h4 {
        color: #ff8282;
      }

      & p {
        color: $grey-light;
      }

      & ul li {
        color: $grey-light;
        border-radius: 5px;
        padding: 5px;
        background-color: $pink-light;
      }
      & span {
        background-color: none;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #979797;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        & svg {
          font-size: 19px;
        }

        &:hover {
          background-color: #97979773;
          border-color: $purple-col;

          & svg {
            color: $grey-light;
          }
        }

        & svg {
          color: #777;
          transition: 0.3s;
        }
      }
    }
    &:hover .overlay {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
}

@media (max-width: 768px) {
  .projects .project .overlay h4 {
    font-size: 16px;
  }
  .projects .project .overlay p {
    line-height: 1.3;
    font-size: 15px;
    margin: 0;
    margin-bottom: 1px;
  }

  .projects .project .overlay ul li {
    font-size: 14px;
    padding: 4px;
  }

  .projects .project .overlay span {
    width: 30px;
    height: 30px;

    & svg {
      font-size: 18px;
    }
  }
}
</style>
