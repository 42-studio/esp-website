<template>

  <div>

    <div class="container text-center mb-8">

      <brand-icon width="64px" class="mb-5" />

      <div class="col-md-8 mx-auto">

        <h3 class="display-3">
          INTRODUCING
        </h3>
        <h4>Enterprise Security Profiler</h4>

        <p class="lead">
          A platform for continuous assurance of your security investments
          against threat-centric frameworks including MITRE ATT&CK®. Utilizing our advanced collider architecture,
          we combine what your security assets provide, how much they cost, and how they are performing.
          Allowing you to determine where to invest for maximum risk reduction.
        </p>

        <b-link type="button" class="btn btn-primary mt-5 mb-5" :to="{ name: 'solutions.overview' }">
          View Our Solutions
        </b-link>
      </div>

    </div>

    <node-scene />

    <!--    <div class="info-graphic">-->

    <!--      <div class="info info-1">-->
    <!--        <div class="icon icon-lg icon-shape rounded-circle">-->
    <!--          <i class="fa fa-user" />-->
    <!--        </div>-->
    <!--        <div class="text-center">-->
    <!--          <h3>-->
    <!--            Control Dependency Mapping-->
    <!--          </h3>-->
    <!--          <p class="load">-->
    <!--            Understanding what your security assets provide, their dependencies, and how much they cost against-->
    <!--            threat-centric frameworks.-->
    <!--            We have developed a standardized model for capturing and quantifying this information.-->
    <!--          </p>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="info info-2">-->
    <!--        <div class="icon icon-lg icon-shape rounded-circle">-->
    <!--          <i class="fa fa-user" />-->
    <!--        </div>-->
    <!--        <div class="text-center">-->
    <!--          <h3>Threat Intelligence</h3>-->
    <!--          <p class="load">-->
    <!--            The threat landscape is constantly evolving over time and so should your investment and strategy.-->
    <!--            Security assets that once satisfied risk appetite might no longer be relevant against current threat-->
    <!--            intelligence.-->
    <!--          </p>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="info info-3">-->
    <!--        <div class="icon icon-lg icon-shape rounded-circle">-->
    <!--          <i class="fa fa-user" />-->
    <!--        </div>-->
    <!--        <div class="text-center">-->
    <!--          <h3>Environmental Telemetry</h3>-->
    <!--          <p class="load">-->
    <!--            Every enterprise is unique. Capturing telemetry across your incidents, breach assessments,-->
    <!--            and more to enable evidence-based validation of control posture.-->
    <!--          </p>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--    </div>-->

  </div>

</template>

<style lang="scss">

.info-graphic {
  position: relative;
  max-width: 1280px;
  margin: auto;
  padding-bottom: 50%;
  min-height: 780px;

  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(0%);
    transform-origin: center center;
  }

  .info {
    background-color: #ceced2;
    border-radius: 7px;

    .icon {
      background-color: inherit;
      transform: translateY(-54px);
    }

    &-1 {
      top: 20%;
      transform: translateX(-155%);
    }

    &-2 {
      top: 0%;
    }

    &-3 {
      top: 20%;
      transform: translateX(55%)
    }
  }

  .esp-icon {
    top: 70%;
    max-width: 320px;
    transform: translateX(-50%) translateY(-50%);
  }

}

</style>
<script>
import NodeScene from '../../../components/NodeScene'
export default {
  components: { NodeScene }
}
</script>
