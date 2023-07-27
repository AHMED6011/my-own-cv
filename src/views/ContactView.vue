<template>
  <div class="contact py-5 overflow-hidden py-5">
    <div class="container py-5 custom-container">
      <h2 class="mb-4 text-light">Contact Us</h2>
      <div class="row">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="col-lg-6 col-md-6 col-12 mb-5 mb-md-0"
        >
          <form class="needs-validation m-auto" novalidate>
            <div class="mb-4">
              <input
                type="text"
                required
                class="form-control inp-text"
                id="validationCustom01"
                placeholder="Username"
                autocomplete="off"
              />
              <div class="invalid-feedback">Please Write Your Name.</div>
            </div>
            <div class="mb-5">
              <input
                type="email"
                required
                class="form-control inp-email"
                id="validationCustom02"
                placeholder="Email Address"
                autocomplete="off"
              />
              <div class="invalid-feedback">Please Write Your Email.</div>
            </div>
            <div class="mb-3">
              <textarea
                required
                class="form-control inp-text"
                id="validationCustom03"
                rows="3"
                placeholder="Message"
              ></textarea>
              <div class="invalid-feedback">Message Field Can't Be Empty.</div>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="col-lg-6 col-md-6 col-12">
          <div class="links">
            <div class="link-item mb-5">
              <a
                class="text-start z-3 position-relative"
                style="color: #25d366"
                target="_blank"
                href="https://wa.me/05550983722"
              >
                <font-awesome-icon style="color: #25d366" icon="fa-brands fa-whatsapp" />
                Whatsapp
              </a>
              <span style="background-color: #25d366; z-index: 1"></span>
            </div>
            <div class="link-item mb-5">
              <a
                class="text-start z-3 position-relative"
                style="color: #b025d3"
                target="_blank"
                href="https://www.instagram.com/ahmed1allawi/"
              >
                <i style="color: #b025d3" class="fa-brands fa-instagram"></i>
                <font-awesome-icon style="color: #b025d3" icon="fa-brands fa-instagram" />
                Instagram
              </a>
              <span style="background-color: #b025d3; z-index: 1"></span>
            </div>
            <div class="link-item">
              <a
                class="text-start z-3 position-relative"
                style="color: #229ed8"
                target="_blank"
                href="https://t.me/+905550983722"
              >
                <font-awesome-icon istyle="color: #229ed8" icon="fa-brands fa-telegram" />
                Telegram
              </a>
              <span style="background-color: #229ed8; z-index: 1"></span>
            </div>
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

.contact {
  .custom-container {
    width: 75%;
    form {
      width: 80%;

      & input,
      textarea {
        border: 0 !important;
        background-color: transparent !important;
        color: white !important;
        border-radius: 0 !important;
        outline: none !important;
        border-bottom: 1px solid #6d6d6d !important;

        &::placeholder {
          color: #9191f6 !important;
          font-size: 18px;
        }

        &:focus {
          box-shadow: none !important;
          border-bottom: 1px solid #8a03f8 !important;
        }
      }

      & textarea {
        min-height: 30vh;
      }

      & button {
        width: 115px;
        height: 45px;
        font-size: 18px;
      }
    }
  }

  .links {
    & .link-item {
      width: 80%;
      margin: auto;
      position: relative;

      & a {
        text-decoration: none;
        font-size: 20px;
        background-color: $grey-light;
        padding: 18px 16px;
        border-radius: 10px;
        transform: skew(-7deg, 0deg);
        transition: 0.3s;
        display: block;
        border: 0;
        z-index: 2;

        &:hover {
          transform: skew(-3deg, 0deg);
        }

        & svg {
          font-size: 25px;
        }
      }

      & span {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        top: 0;
        right: 0;
        transition: 0.3s;
        z-index: -3;
        transform: rotate3d(0, 0, 1, 3deg) skew(-7deg, 0deg);
        transform-origin: left bottom;
      }

      & a:hover + span {
        transform: rotate3d(0, 0, 0, 0deg) skew(-3deg, 0deg) translate(-1px, 0px);
        transform-origin: left bottom;
      }
    }
  }
}
</style>
