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
        <div class="laptop-container">
          <img
            class="intro-laptop"
            src="@/assets/img/previews/macbook.svg"
            height="100%"
          />
          <div class="spotlight"></div>
        </div>
      </div>
      <div class="see-more">
        See more<br /><i class="fa fa-chevron-down mt-2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.introduction {
  position: relative;
  clear: both;
  padding: 200px var(--body-padding);

  .intro-container {
    max-width: 1920px;
    min-height: calc(100vh - 20rem);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

      width: 30rem;
      height: 10rem;
      border-radius: 50%;
      background: rgba(90, 52, 157, 0.5);
      z-index: -10;
      box-shadow: 0px 0px 15.6rem 10rem rgba(90, 52, 157, 0.5);

      animation-name: spotlight-movement;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }
  }

  button {
    width: 8.5rem;
    height: 2.7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 50px;
    background-color: transparent;
    border: var(--primary) solid 0.15rem;
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
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);

    text-align: center;
    color: #fff;
    font-weight: lighter;
    font-size: 0.8rem;
    letter-spacing: 0.03rem;
    line-height: 1.2rem;
  }
}

@keyframes spotlight-movement {
  0% {
    transform: translate(-50%, -50%);
  }

  50% {
    transform: translate(-35%, -35%);
    box-shadow: 0px 0px 15.6rem 10rem rgba(90, 52, 157, 0.5);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}

@media only screen and (min-width: 1920px) {
  .laptop-container {
    right: calc((0px) + 200px) !important;
    transform: translate(0, -50%) !important;
  }
}

@media only screen and (max-width: 1300px) {
  .introduction {
    padding: 10rem var(--body-padding) !important;
  }

  .section-content {
    position: relative !important ;
    top: 0 !important;
    transform: translateY(0) !important;
  }

  .laptop-container {
    margin-top: 3rem;
    position: relative !important;
    transform: translate(0) !important;
    width: 100% !important;

    .intro-laptop {
      width: 100% !important;
    }
  }
}
</style>
