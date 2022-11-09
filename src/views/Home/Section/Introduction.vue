<script>
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

let refs,
  canvas,
  ctx,
  desktop,
  logoLocation,
  vendorLocation,
  consumerLocation,
  vendorParagraphLocation;
const cornerRoundnessRem = 2; // radius (rem)
let cornerRoundness = convertRemToPixels(cornerRoundnessRem); // radius (px)

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  ctx.lineWidth = cornerRoundness / 5;
  ctx.lineCap = "round";
  ctx.shadowBlur = convertRemToPixels(2);

  let cornerRoundnessOffset;

  ctx.strokeStyle = "#C00027";
  ctx.shadowColor = "#C00027";

  // red line
  if (desktop) {
    ctx.moveTo(
      logoLocation.left + 10,
      logoLocation.top + logoLocation.height / 2
    );

    ctx.lineTo(
      vendorLocation.left + vendorLocation.width / 2 + cornerRoundness,
      logoLocation.top + logoLocation.height / 2
    );

    ctx.quadraticCurveTo(
      vendorLocation.left + vendorLocation.width / 2,
      logoLocation.top + logoLocation.height / 2,
      vendorLocation.left + vendorLocation.width / 2,
      logoLocation.top + logoLocation.height / 2 + cornerRoundness
    );

    ctx.lineTo(
      vendorLocation.left + vendorLocation.width / 2,
      vendorLocation.top - convertRemToPixels(1.5)
    );
  } else {
    ctx.moveTo(
      logoLocation.left + 10,
      logoLocation.top + logoLocation.height / 2
    );

    ctx.lineTo(
      vendorLocation.left + vendorLocation.width / 2 + cornerRoundness,
      logoLocation.top + logoLocation.height / 2
    );

    ctx.quadraticCurveTo(
      vendorLocation.left + vendorLocation.width / 2,
      logoLocation.top + logoLocation.height / 2,
      vendorLocation.left + vendorLocation.width / 2,
      logoLocation.top + logoLocation.height / 2 - cornerRoundness
    );

    ctx.lineTo(
      vendorLocation.left + vendorLocation.width / 2,
      vendorLocation.top +
        vendorLocation.height +
        vendorParagraphLocation.height +
        convertRemToPixels(1.5)
    );
  }
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#FFFFFF";
  ctx.shadowColor = "#FFFFFF";
  // white line
  ctx.moveTo(
    logoLocation.left + logoLocation.width - 10,
    logoLocation.top + logoLocation.height / 2
  );

  ctx.lineTo(
    consumerLocation.left + consumerLocation.width / 2 - cornerRoundness,
    logoLocation.top + logoLocation.height / 2
  );

  ctx.quadraticCurveTo(
    consumerLocation.left + consumerLocation.width / 2,
    logoLocation.top + logoLocation.height / 2,
    consumerLocation.left + consumerLocation.width / 2,
    logoLocation.top + logoLocation.height / 2 + cornerRoundness
  );

  ctx.lineTo(
    consumerLocation.left + consumerLocation.width / 2,
    consumerLocation.top - convertRemToPixels(1.5)
  );

  ctx.stroke();
}

function getLocations() {
  desktop = true;
  let vendorRef = refs?.vendorD;

  if (refs?.vendorD.offsetHeight == 0) {
    desktop = false;
    vendorRef = refs?.vendorM;
  }

  logoLocation = {
    height: refs?.logo.offsetHeight,
    width: refs?.logo.offsetWidth,
    top:
      refs?.logo.offsetTop +
      refs?.logoContainer.offsetTop -
      refs?.logo.offsetHeight / 2,
    left: refs?.logo.offsetLeft - refs?.logo.width / 2
  };
  vendorLocation = {
    height: vendorRef.offsetHeight,
    width: vendorRef.offsetWidth,
    top: vendorRef.offsetTop,
    left: vendorRef.offsetLeft
  };
  vendorParagraphLocation = {
    height: refs?.vendorParagraph.offsetHeight,
    width: refs?.vendorParagraph.offsetWidth,
    top: refs?.vendorParagraph.offsetTop,
    left: refs?.vendorParagraph.offsetLeft
  };
  consumerLocation = {
    height: refs?.consumer.offsetHeight,
    width: refs?.consumer.offsetWidth,
    top: refs?.consumer.offsetTop,
    left: refs?.consumer.offsetLeft
  };
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
      canvas.style.width = canvas.getBoundingClientRect().width + "px";
      canvas.style.height = canvas.getBoundingClientRect().height + "px";

      ctx.scale(scale, scale);
      cornerRoundness = convertRemToPixels(cornerRoundnessRem);

      getLocations();
      draw();
    }

    resizeCanvas();
  }
};
</script>

<template>
  <div class="padding-container">
    <!-- Stars Animation WIP -->
    <!--    <div id="stars" />-->
    <!--    <div id="stars2" />-->
    <!--    <div id="stars3" />-->

    <div class="wrapper">
      <div class="title-container">
        <h1>Security Investment Is Broken.</h1>
        <p class="subtitle">
          Enterprises are spending more and deploying more security products,
          <br />
          but breaches are still <span class="red">increasing!</span>
        </p>
      </div>
      <section class="vendors mobile-display">
        <h2 ref="vendorM" class="red mb-0 mt-8">
          Vendors
        </h2>
        <p ref="vendorParagraph">
          can better articulate what their security solutions do in a meaningful
          way directly against the possible attacks the consumers face,
          mitigating the time, friction & frustration expressed in marketing &
          sales through product breakdown & information continuity designed to
          improve consumer engagement & retention.
        </p>
      </section>
      <div ref="logoContainer" class="graphic-container">
        <img
          ref="logo"
          class="logo"
          src="@/assets/img/logo.png"
          alt="es profiler logo"
        />
        <svg height="100%" width="100%" />
      </div>
      <div class="info-container">
        <section class="vendors desktop-display">
          <h2 ref="vendorD" class="red">
            Vendors
          </h2>
          <p>
            can better articulate what their security solutions do in a
            meaningful way directly against the possible attacks the consumers
            face, mitigating the time, friction & frustration expressed in
            marketing & sales through product breakdown & information continuity
            designed to improve consumer engagement & retention.
          </p>
        </section>
        <section class="consumers">
          <h2 ref="consumer" class="white">
            Consumers
          </h2>
          <p>
            can directly operationalise the product data provided by the vendors
            in ESProfiler’s SaaS Platform for a more seamless product adoption
            experience by breaking down the silos between; The board, C-Suite,
            Threat Intel Teams, Innovations, Procurement, Security Operations &
            Architecture and the Product Owners.
          </p>
        </section>
      </div>
      <canvas ref="canvas" class="introduction-canvas" />
    </div>
  </div>
</template>

<style lang="scss">
.padding-container {
  padding: 6rem var(--body-padding);

  .wrapper {
    position: relative;
    max-width: 1920px;
    min-height: calc(100vh - 400px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .introduction-canvas {
      top: 0;
      left: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      // z-index: -1;
    }

    .title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      z-index: 1;

      h1 {
        color: #fff;
        font-weight: 600;
        font-size: 3rem;
        line-height: 3.3rem;
        margin-bottom: 28px;
      }
      .subtitle {
        max-width: 720px;
      }
    }

    .graphic-container {
      position: relative;
      height: 26rem;
      width: 100%;

      .logo {
        position: absolute;
        width: 10rem;
        height: 10rem;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .info-container {
      display: flex;
      flex-direction: row;
      gap: 8rem;
      z-index: 1;

      h2 {
        margin: 0;
        width: min-content;
      }

      section.vendors {
        text-align: left;
      }

      section.consumers {
        text-align: right;
      }
    }
  }
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--secondary);
}

p {
  color: rgba(255, 255, 255, 0.6);
  font-weight: lighter;
  font-size: 1rem;
  letter-spacing: 0.03rem;
}

.red {
  font-weight: bold;
  color: var(--primary);
}
.white {
  margin-left: auto !important;
  font-weight: bold;
  color: white;
}

.mobile-display {
  display: block;

  h2 {
    width: min-content;
  }
}
.desktop-display {
  display: none;
}

@include media-breakpoint-up(md) {
  .mobile-display {
    display: none;
  }
  .desktop-display {
    display: block;
  }
}
</style>
