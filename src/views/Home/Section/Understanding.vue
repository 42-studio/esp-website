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
        ESProfiler is a CSIV Platform that empowers security leaders to
        continually answer five powerful questions and make decisions with
        confidence.
      </p>

      <div class="path-container">
        <canvas ref="canvas" class="understanding-canvas" />
        <section class="left">
          <div ref="circle-1" class="circle" />

          <div class="text-container">
            <h2 class="title">
              What do you own?
            </h2>
            <p class="subtitle">
              Today's security products are often used by multiple business
              units, each with their own processes and systems, making it
              difficult to keep track of what products your enterprise owns and
              the associated costs.
            </p>
            <p class="subtitle">
              ESProfiler solves this problem by embedding into your procurement
              process to continually track security- related contracts. Our
              advanced search and analytics engine indexes contracts, providing
              a clear view of what products your enterprise owns, when they
              expire, and how much they cost.
            </p>
            <p class="subtitle">
              Fusing contractual data with deep security understanding unlocks
              immediate financial and inventory insights, empowering C-level
              strategy.
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
              In a market lacking standardisation, it is difficult to understand
              what your security products do and quantify their benefits,
              leading to investment overlap and security portfolios that often
              fail to meet requirements.
            </p>
            <p class="subtitle">
              ESProfiler uses an industry-leading model to quantify what your
              security products do in detail against how attackers operate,
              based on established frameworks such as MITRE ATT&CK® and NIST.
            </p>
            <p class="subtitle">
              By combining your security controls with quantified capabilities,
              you gain a comprehensive understanding of what your security
              investments should do to protect against threats. This enables you
              to optimise your security portfolio and ensure that it effectively
              meets your needs.
            </p>
          </div>
        </section>

        <section class="left">
          <div ref="circle-3" class="circle" />
          <div class="text-container">
            <h2 class="title">
              What have you deployed?
            </h2>
            <p class="subtitle">
              The disconnect between the security capabilities that enterprises
              acquire and those they actually deploy leads to hidden waste in
              budgets and incidents caused by poor security capability
              utilisation
            </p>
            <p class="subtitle">
              ESProfiler relates product features to security capabilities and
              blends this data with automated usage assertions from product
              owners to identify unused products and features with security
              implications and budget waste.
            </p>
            <p class="subtitle">
              By continually showcasing the difference between acquired and
              achieved security capabilities, security leaders get more value
              from their security assets.
            </p>
          </div>
        </section>

        <section class="right">
          <div ref="circle-4" class="circle" />
          <div class="text-container">
            <h2 class="title">
              Where are you gaps and overlaps?
            </h2>
            <p class="subtitle">
              Identifying gaps in your security and overlap in your investments
              can be impossible when you don't know what security products you
              own, what capabilities they provide, and what you have deployed.
            </p>
            <p class="subtitle">
              ESProfiler solves this problem by combining information from each
              of these questions to create a clear picture of your security
              products, deployed capabilities, and overall security posture. The
              analytics and visualisation engine in ESProfiler uses this
              information to provide actionable insights into your security gaps
              and investment overlap.
            </p>
            <p class="subtitle">
              With a deep understanding of what's powering your security
              posture, ESProfiler allows you to model different scenarios of
              product investment and divestment against threats, unlocking the
              next level of strategy and spend optimisation.
            </p>
          </div>
        </section>

        <section class="left">
          <div ref="circle-5" class="circle" />
          <div class="text-container">
            <h2 class="title">
              Is it relevant & working?
            </h2>
            <p class="subtitle">
              As your threat actors evolve, your enterprise faces a continual
              flow of security incidents. Without clear definitions of what your
              security products should do, it can be challenging to understand
              if your security investment is effective and remains relevant.
            </p>
            <p class="subtitle">
              ESProfiler addresses this problem by integrating into your
              post-incident review process and breach attack simulations to link
              the language used to describe an incident to the parts of your
              investment that should have provided the relevant capabilities. By
              combining this data with threat intelligence, ESProfiler provides
              a holistic view of what's working and relevant, enabling
              continuous guidance and optimisation of your security strategy.
            </p>
            <p class="subtitle">
              By quantifying what your security should be doing in relation to
              what's happening in your enterprise and the wider industry,
              ESProfiler enables continuous, threat-driven guidance.
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
    max-width: 1450px;
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
      max-width: 1000px;
      color: rgba(var(--dark-text), 0.6);

      // margin-bottom: 8rem;

      span.defined {
        font-weight: bold;
        color: var(--primary);
      }
    }

    .path-container {
      margin-top: 6rem;
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
        margin-bottom: 6rem;

        &:last-child {
          margin-bottom: 8rem;
        }

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
