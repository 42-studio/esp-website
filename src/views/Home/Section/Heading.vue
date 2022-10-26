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
            <router-link :to="{ name: 'schedule.demo' }">
              <button>
                Book a Demo
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="laptop-container">
        <img
          class="intro-laptop"
          src="@/assets/img/previews/macbook.svg"
          height="100%"
        />
        <div class="spotlight"></div>
      </div>
      <div class="see-more">See more<br />⌄</div>
    </div>
  </div>
</template>

<style lang="scss">
.introduction {
  position: relative;
  clear: both;
  padding: 200px;
  // padding-left: 200px;

  .intro-container {
    max-width: 1920px;
    min-height: calc(100vh - 400px);
    margin: 0 auto;
    box-sizing: border-box;
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
      font-weight: 600;
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

  .laptop-container {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(200px, -50%);

    .intro-laptop {
      // overflow: hidden;
      width: 800px;
      overflow: visible;
      z-index: 2;
    }

    .spotlight {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 650px;
      height: 37;
      border-radius: 50%;
      background: #5a349d;
      z-index: -1;
      box-shadow: 0px 0px 243px 308px rgba(90, 52, 157, 0.5);
    }
  }

  button {
    width: 170px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    border-radius: 50px;
    background-color: transparent;
    border: var(--primary) solid 3px;
    outline: none;
    color: var(--primary);
    text-align: unset;

    transition: all 200ms ease;
  }

  button:hover {
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

@media only screen and (min-width: 1920px) {
  .laptop-container {
    right: calc((0px) + 200px) !important;
    transform: translate(0, -50%) !important;
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
