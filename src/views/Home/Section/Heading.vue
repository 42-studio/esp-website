<template>
  <div>
    <div class="introduction">
      <div class="intro-container">
        <div class="section-content">
          <div class="intro-text">
            <div class="m-auto">
              <h3>Maximise Security ROI</h3>

              <h1>
                A central exchange<br />to streamline the<br />cyber security<br />market.
              </h1>
            </div>

            <p class="lead mb-4">
              Freedom from frustration, enabling vendors to align cyber security
              solutions with consumer’s threat informed defence through
              threat-centric methodology.
            </p>

            <div
              class="button"
              @click="$router.push({ name: 'schedule.demo' })"
            >
              Book a Demo
            </div>
          </div>

          <img
            class="intro-laptop"
            src="@/assets/img/previews/macbook.svg"
            height="100%"
          />
          <div class="spotlight"></div>
        </div>
      </div>
      <div class="see-more">See more<br />⌄</div>
    </div>
  </div>
</template>

<style lang="scss">
.introduction {
  position: relative;
  clear: both;
  padding: 200px 0;
  padding-left: 200px;

  .intro-container {
    max-width: 1920px;
    min-height: calc(100vh - 400px);
    margin: 0 auto;
  }

  .section-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .intro-text {
    // position: absolute;
    // top: 20%;
    // left: 10%;
    max-width: 540px;
    text-align: left;

    h1 {
      color: #fff;
      font-weight: 600;
      font-size: 3rem;
      line-height: 3.3rem;
      margin-bottom: 28px;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--secondary);
    }

    p {
      color: #fff;
      opacity: 0.6;
      font-weight: lighter;
      font-size: 1rem;
      letter-spacing: 0.03rem;
    }
  }

  .intro-laptop {
    // transform: translateX(300px);
    // max-width: 1280px;
    // height: 100%;
    width: 800px;
    overflow: visible;
    z-index: 2;
  }

  .spotlight {
    position: absolute;
    top: 50%;
    right: 0px;
    width: 650px;
    height: 37;
    border-radius: 50%;
    background: #5a349d;
    z-index: -1;
    box-shadow: 0px 0px 243px 308px rgba(90, 52, 157, 0.5);
  }

  .button {
    width: 170px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    font-weight: 600;
    border-radius: 50px;
    background-color: transparent;
    border: var(--primary) solid 3px;
    color: var(--primary);
    text-align: unset;

    transition: all 200ms ease;
  }

  .button:hover {
    color: white;
    background-color: var(--primary);
    transform: scale(1.1);
  }

  .see-more {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);

    text-align: center;
    color: #fff;
    font-weight: lighter;
    font-size: 1rem;
    letter-spacing: 0.03rem;
    line-height: 1.2rem;
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
        padding-bottom: 5%;
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
