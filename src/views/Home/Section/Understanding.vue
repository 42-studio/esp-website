<script>
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

let refs, canvas, ctx, circleLocations;
const cornerRoundnessRem = 3.2; // radius (rem)
let cornerRoundness = convertRemToPixels(cornerRoundnessRem); // radius (px)

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  ctx.lineWidth = cornerRoundness / 5;
  ctx.strokeStyle = "#160C28";

  let cornerRoundnessOffset;

  for (let i = 0; i < circleLocations.length - 1; i++) {
    const fromCircle = circleLocations[i];
    const toCircle = circleLocations[i + 1];
    cornerRoundnessOffset = cornerRoundness * -((i % 2) * 2 - 1);

    // move to bottom of circle
    ctx.moveTo(
      fromCircle.left + fromCircle.width / 2,
      fromCircle.top + fromCircle.height - 5
    );
    // first vertical line
    ctx.lineTo(
      fromCircle.left + fromCircle.width / 2,
      Math.max(
        toCircle.top - cornerRoundness * 2,
        fromCircle.top + fromCircle.height
      )
    );

    // first curve
    ctx.quadraticCurveTo(
      fromCircle.left + fromCircle.width / 2,
      Math.max(
        toCircle.top - cornerRoundness,
        fromCircle.top + fromCircle.height
      ),
      fromCircle.left + fromCircle.width / 2 + cornerRoundnessOffset,
      Math.max(
        toCircle.top - cornerRoundness,
        fromCircle.top + fromCircle.height
      )
    );

    // horizontal line
    ctx.lineTo(
      toCircle.left + toCircle.width / 2 - cornerRoundnessOffset,
      Math.max(
        toCircle.top - cornerRoundness,
        fromCircle.top + fromCircle.height
      )
    );

    // draw line to next circle
    ctx.quadraticCurveTo(
      toCircle.left + fromCircle.width / 2,
      Math.max(
        toCircle.top - cornerRoundness,
        fromCircle.top + fromCircle.height
      ),
      toCircle.left + toCircle.width / 2,
      toCircle.top + 5
    );

    cornerRoundnessOffset = cornerRoundness * ((i % 2) * 2 - 1);
  }

  const lastCircle = circleLocations[circleLocations.length - 1];

  // move to bottom of circle
  ctx.moveTo(
    lastCircle.left + lastCircle.width / 2,
    lastCircle.top + lastCircle.height - 5
  );

  // vertical line
  ctx.lineTo(
    lastCircle.left + lastCircle.width / 2,
    Math.max(
      canvas.height / window.devicePixelRatio - cornerRoundness * 3,
      lastCircle.top + lastCircle.height
    )
  );

  // first curve
  ctx.quadraticCurveTo(
    lastCircle.left + lastCircle.width / 2,
    Math.max(
      canvas.height / window.devicePixelRatio - cornerRoundness * 2,
      lastCircle.top + lastCircle.height
    ),
    lastCircle.left + lastCircle.width / 2 + cornerRoundnessOffset,
    Math.max(
      canvas.height / window.devicePixelRatio - cornerRoundness * 2,
      lastCircle.top + lastCircle.height
    )
  );

  // horizontal line
  ctx.lineTo(
    canvas.width / window.devicePixelRatio / 2 - cornerRoundnessOffset,
    Math.max(
      canvas.height / window.devicePixelRatio - cornerRoundness * 2,
      lastCircle.top + lastCircle.height
    )
  );

  // draw line to badge
  ctx.quadraticCurveTo(
    canvas.width / window.devicePixelRatio / 2,
    Math.max(
      canvas.height / window.devicePixelRatio - cornerRoundness * 2,
      lastCircle.top + lastCircle.height
    ),
    canvas.width / window.devicePixelRatio / 2,
    canvas.height / window.devicePixelRatio - cornerRoundness
  );

  // vertical line
  ctx.lineTo(
    canvas.width / window.devicePixelRatio / 2,
    canvas.height / window.devicePixelRatio
  );

  ctx.stroke();
}

function getCircleLocation() {
  circleLocations = Object.entries(refs)
    .filter(([k, v]) => k.includes("circle"))
    .map(([k, v]) => ({
      height: v.offsetHeight,
      width: v.offsetWidth,
      top: v.offsetTop,
      left: v.offsetLeft
    }));
}

export default {
  mounted() {
    refs = this.$refs;
    canvas = this.$refs.canvas;
    ctx = canvas.getContext("2d");

    window.addEventListener("resize", resizeCanvas, false);

    function resizeCanvas() {
      const scale = window.devicePixelRatio;

      canvas.width = canvas.getBoundingClientRect().width * scale;
      canvas.height = canvas.getBoundingClientRect().height * scale;
      // canvas.style.width = canvas.getBoundingClientRect().width + "px";
      // canvas.style.height = canvas.getBoundingClientRect().height + "px";

      ctx.scale(scale, scale);
      cornerRoundness = convertRemToPixels(cornerRoundnessRem);

      getCircleLocation();
      draw();
    }

    resizeCanvas();
  }
};
</script>

<template>
  <div class="understand-wrapper">
    <div class="understand-container">
      <h1 class="understanding-title">
        Continuous Security<br />Investment Validation
      </h1>

      <p class="subtitle">
        ESProfiler empowers security leaders to answer 5 powerful questions &
        make decisions with confidence.
      </p>

      <div class="path-container">
        <canvas ref="canvas" class="understanding-canvas" />
        <section class="left">
          <div ref="circle-1" class="circle" />

          <div class="text-container">
            <h2 class="title">
              What do we own?
            </h2>
            <p class="subtitle">
              Today's security products don't just reside in security teams.
              Multiple business units utilising independent processes and
              systems make it hard to ascertain what security products an
              enterprise owns and the actual cost.
            </p>
            <p>
              ESPRFOILER
            </p>
          </div>
        </section>

        <section class="right">
          <div ref="circle-2" class="circle" />
          <div class="text-container">
            <h2 class="title">
              What should it do?
            </h2>
            <p class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              posuere est. Cras consectetur nisi tellus, sed dapibus massa
              auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus
              molestie.
            </p>
          </div>
        </section>

        <section class="left">
          <div ref="circle-4" class="circle" />
          <div class="text-container">
            <h2 class="title">
              What is being used?
            </h2>
            <p class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              posuere est. Cras consectetur nisi tellus, sed dapibus massa
              auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus
              molestie.
            </p>
          </div>
        </section>

        <section class="right">
          <div ref="circle-5" class="circle" />
          <div class="text-container">
            <h2 class="title">
              Is it working effectively?
            </h2>
            <p class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              posuere est. Cras consectetur nisi tellus, sed dapibus massa
              auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus
              molestie.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.understand-wrapper {
  position: relative;
  clear: both;
  padding: 0 var(--body-padding);

  .understand-container {
    max-width: 1920px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .understanding-title {
      max-width: 40rem;
    }

    h1 {
      color: var(--dark-text);
      font-weight: 600;
      font-size: 3rem;
      line-height: 3.3rem;
      margin-bottom: 28px;
    }

    .subtitle {
      max-width: 600px;
      color: rgba(var(--dark-text), 0.6);

      margin-bottom: 8rem;

      span.defined {
        font-weight: bold;
        color: var(--primary);
      }
    }

    .path-container {
      width: 100%;
      position: relative;
      pointer-events: none;

      .understanding-canvas {
        top: 0;
        left: 0;
        position: absolute;
        height: 100%;
        width: 100%;
      }

      section {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
        margin-bottom: 10rem;

        &.left {
          flex-direction: row;
          text-align: left;
          padding-right: 1.3rem;
        }

        &.right {
          flex-direction: row-reverse;
          text-align: right;
          padding-left: 1.3rem;
        }

        .circle {
          position: relative;
          flex-shrink: 0;
          height: 2.6rem;
          width: 2.6rem;
          border-radius: 100%;
          border: var(--accent) solid 0.5rem;
        }

        .text-container {
          h2 {
            color: var(--dark-text);
            font-weight: 600;
            font-size: 2rem;
            margin: 0;
          }
        }
      }
    }
  }

  p {
    color: var(--dark-text);
  }
}
</style>
