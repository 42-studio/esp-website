<template>

  <div>

    <div class="introduction">

      <div class="section-video">

        <video autoplay muted loop>
          <source src="/video/bg3.webm" type="video/mp4">
        </video>

      </div>

      <div class="intro-container">

        <div class="section-content">

          <div>

            <div class="intro-text">

              <div class="box">

                <div class="m-auto">

                  <h2>
                    Data<br>Insight
                  </h2>

                  <h3 class="text-danger">
                    To maximise security ROI
                  </h3>

                </div>

                <p class="lead mb-5">
                  Combining security assets, intel, incidents, and more with threat-centric frameworks.
                  We provide security insight allowing you to determine where to invest for maximum risk reduction.
                </p>

                <b-button @click="$router.push({ name: 'schedule.demo' })" variant="primary">
                  Schedule A Demo
                </b-button>

              </div>

            </div>

            <div class="intro-laptop">

              <device-laptop screen-css="bg-primary d-flex justify-content-start align-items-center text-white display-4">
                <img src="@/assets/img/previews/technique-detail.jpg" height="100%">
              </device-laptop>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss">

.introduction {

  position: relative;
  line-height: 0;
  clear: both;
  background-color: slategrey;

  .section-video {
    overflow: hidden;

    position: absolute;
    top:0;
    left:0;
    right:0;

    max-height: 730px;

    video {
      filter: contrast(150%);
      min-height: 720px;
      min-width: 100%;
    }

  }

  .intro-container {
    max-width: 1920px;
    margin: auto;
  }

  .section-content {
    position: relative;
    height: 100%;
    max-width: 1440px;
    min-height: 720px;
    margin: auto;
    padding-bottom: 35%;
  }

  .intro-text {

    position: absolute;
    top: 20%;
    left: 10%;
    max-width: 420px;
    text-align: center;

    h2 {
      color: #fff;
      font-size: 3rem;
      margin-bottom: 28px;
    }

    h3 {
      font-size: 2.3rem;
    }

    h2, h3 {
      display: inline-block;
      margin-left: initial !important;
      line-height: 1.0;
      text-transform: uppercase;
      padding: initial;
      font-weight: bolder;
    }

    p {
      color: #fff;
      font-weight: lighter;
      font-size: 1rem;
    }

    .box {

      padding: 32px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

    }

  }

  .intro-laptop {
    position: absolute;
    top: 30%;
    left: 35%;
    width: 90%;
    max-width: 1280px;
    overflow: visible;
    z-index: 2;
  }

  button {
    width: 256px;
    height: 64px;
    border-radius: 32px;
  }

}

@media only screen and (max-width: 1200px) {

  .introduction {

    .intro-container {
      position: relative;
      top: initial;
      left: initial;
      right: initial;

      .section-content {
        padding-bottom:5%;
        padding-top: 10%;
      }
    }

    .intro-text {

      position: relative;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;

    }

    .intro-laptop {
      position: relative;
      top: initial;
      left: initial;
      margin: auto;
      padding-bottom: 5%;
    }

    .section-video {
      transform-origin: top left;
      max-height: initial;
      height: 100%;

      video {
        visibility: visible;
        height: inherit;
      }

    }

  }

}

@media only screen and (max-width: 720px) {

  .introduction {

    .intro-laptop {
      width: 100%;
    }

    .section-video {
      overflow: hidden;
      max-height: initial;

    }

  }

}
</style>
