<template>
  <div class="section features-1">
    <div class="section-wrapper text-center">
      <span class="badge badge-accent badge-pill mb-3 solution-badge "
        >The Solution</span
      >

      <div>
        <div class="col-md-8 mx-auto text-center">
          <brand-icon width="6.4rem" class="m-3" />
          <h3 class="display-3">
            Coverage Analytics
          </h3>
          <p class="lead">
            Our mission is to empower enterprises to improve security coverage
            and ROI through threat-centric data insights.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-4">
          <div class="info">
            <div class="icon icon-lg icon-shape shadow rounded-circle">
              <i class="fa fa-braille" />
            </div>

            <h4 class="info-title">
              Threat-centric Thinking
            </h4>

            <p class="description">
              ESProfiler promotes threat-centric thinking to understanding a
              business's security posture “think like an attacker to stop an
              attacker”.<br />
              For the most effective defence we must align our way of thinking.
            </p>

            <!-- <a href="javascript:;" class="text-primary"
              >More about us
              <i class="fa fa-chevron-right" />
            </a> -->
          </div>
        </div>

        <div class="col-xl-4">
          <div class="info">
            <div class="icon icon-lg icon-shape shadow rounded-circle">
              <i class="fa fa-award" />
            </div>

            <h4 class="info-title">
              Industry Recognised
            </h4>

            <p class="description">
              ESP aligns your data with industry-recognized threat-centric
              attack frameworks by providing a powerful toolset for
              strategically mapping the coverage and divestment of security
              assets.
            </p>

            <!-- <a href="javascript:;" class="text-primary"
              >Learn about our products
              <i class="fa fa-chevron-right" />
            </a> -->
          </div>
        </div>

        <div class="col-xl-4">
          <div class="info">
            <div class="icon icon-lg icon-shape shadow rounded-circle">
              <i class="fa fa-globe" />
            </div>

            <h4 class="info-title ">
              Beyond Basics
            </h4>

            <p class="description">
              Extending far beyond traditional coverage, our Control Dependency
              Models capture the defensive logical placement, function,
              platforms covered and technologies dependencies.
            </p>

            <!-- <a href="javascript:;" class="text-primary"
              >Check our documentation
              <i class="fa fa-chevron-right" />
            </a> -->
          </div>
        </div>
      </div>

      <HorizontalRule class="mt-2 mb-4" />

      <span class="badge badge-accent badge-pill mb-3">The Product</span>

      <div>
        <div class="col-md-8 mx-auto text-center">
          <h3 class="display-3">
            <span class="red">Enterprise Security</span> Profiler
          </h3>
          <p class="lead">
            A platform for continuous assurance of your security investments
            against threat-centric frameworks including MITRE ATT&CK®. Utilizing
            our advanced collider architecture, we combine what your security
            assets provide, how much they cost, and how they are performing.
            Allowing you to determine where to invest for maximum risk
            reduction.
          </p>
          <router-link :to="{ name: 'schedule.demo' }">
            <button class="mx-auto">
              Book a Demo
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalRule from "../../../layout/HorizontalRule.vue";

export default {
  components: {
    HorizontalRule
  }
};
</script>

<style lang="scss">
.section {
  position: relative;
  clear: both;
  padding: 0 var(--body-padding);

  .section-wrapper {
    max-width: 1920px;
    margin: 0 auto;

    .badge {
      font-size: 0.7rem;
      transform: translateY(-5px);
    }

    h3 {
      color: var(--dark-text);
    }

    .lead {
      font-size: 1rem;
      color: rgba(var(--dark-text), 0.6);
      padding: 0 2rem;
      margin: 0 auto;
      margin-bottom: 2rem;
      max-width: 700px;
    }

    .info {
      max-width: 450px;
      text-align: left;

      .icon {
        background-color: var(--secondary);
      }

      .info-title {
        font-weight: 600;
        color: var(--dark-text);
        padding: 0 15px 0 0;
      }

      p {
        color: rgba(var(--dark-text), 0.6);
        font-weight: normal;
        padding: 0 15px 0 0;
        line-height: 1.3rem;
      }

      a i {
        top: 3px;
        position: relative;
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
  }
}

.fa-braille,
.fa-award,
.fa-globe {
  color: white;
}
</style>
