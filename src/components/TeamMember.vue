<template>
  <div
    class="wrapper-member"
    :style="{ 'grid-template-columns': isRight ? '5fr 3fr' : '3fr 5fr' }"
  >
    <div class="member-image" :style="{ order: isRight ? '2' : '1' }">
      <div class="red-background" />
      <div class="mask">
        <slot />
      </div>
    </div>
    <div
      class="text-container"
      :style="{
        'text-align': isRight ? 'right' : 'left',
        order: isRight ? '1' : '2'
      }"
    >
      <hr class="red-line">
      <h4 class="member-name">
        {{ name }}
      </h4>
      <label class="member-position">
        {{ title }}
      </label>

      <transition name="fade">
        <p v-if="descriptionExpanded" class="member-description-expanded">
          {{ description }}<br>
          <span
            class="read-more"
            @click="descriptionExpanded = !descriptionExpanded"
          >Read less</span>
        </p>
      </transition>
      <p class="member-description">
        {{ description }}
      </p>
      <p @click="descriptionExpanded = !descriptionExpanded" class="read-more">
        Read more
      </p>
      <div
        class="social-container"
        :style="{ 'justify-content': isRight ? 'flex-end' : 'flex-start' }"
      >
        <a
          v-if="linkedin"
          :href="linkedin"
          target="_blank"
          class="d-block footer-links py-1"
        >
          <i class="social-icon fa fa-linkedin brand" />
        </a>
        <a
          v-if="email"
          :href="'mailto:' + email"
          target="_blank"
          class="d-block footer-links py-1"
        >
          <i class="social-icon fa fa-envelope" />
        </a>
        <a
          v-if="twitter"
          :href="twitter"
          target="_blank"
          class="d-block footer-links py-1"
        >
          <i class="social-icon fa fa-twitter brand" />
        </a>
        <a
          v-if="facebook"
          :href="facebook"
          target="_blank"
          class="d-block footer-links py-1"
        >
          <i class="social-icon fa fa-facebook brand" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper-member {
  position: relative;
  display: grid;
  gap: 2rem;

  .member-image {
    position: relative;

    .mask {
      height: 90%;
      aspect-ratio: 1;
      border-radius: 1rem;

      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -20.5%) rotate(45deg);

      overflow: hidden;
    }
  }

  .red-background {
    background-color: #ececec;
    height: 60%;
    aspect-ratio: 1;
    border-radius: 1rem;

    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -20.5%) rotate(45deg);

    box-shadow: inset 0 0 1rem 0.5rem rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0px 0px 75px #5b349d);
  }
}

.text-container {
  position: relative;
  flex-grow: 5;
  flex-shrink: 0;
  flex-basis: 0;

  .red-line {
    height: 2px;
    width: 100%;
    background-color: var(--secondary);
    margin: 0;
    margin-bottom: 0.5rem;
  }

  [class^="member-"],
  .read-more {
    color: #fff;
    margin: 0;
    line-height: 2rem;
  }

  .member-name {
    font-weight: 600;
  }

  .member-description,
  .member-description-expanded {
    margin-top: 0.5rem;
  }

  .member-description {
    opacity: 0.5;
    line-height: 1.2rem;
    font-size: 0.8rem;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .member-position {
    margin-top: 0rem;
    font-size: .8rem;
  }

  .member-description-expanded {
    position: absolute;
    border-radius: 0.5rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    z-index: 5;
    background-color: #160c28;
    color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 1rem 1.5rem #160c28;
  }

  .read-more {
    opacity: 0.5;
    line-height: 1.2rem;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .social-container {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    gap: 1rem;

    .social-icon {
      height: 100%;
      font-size: 1.5rem;
      color: #fff;
      font-family: "Font Awesome 5 Free", "Font Awesome 5 Brands";
      opacity: 0.6;
      transition: all 200ms ease;

      &:hover {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
export default {
  props: {
    isRight: String,
    title: String,
    name: String,
    description: String,
    linkedin: String,
    email: String,
    twitter: String,
    facebook: String
  },
  data () {
    return {
      descriptionExpanded: false
    }
  }
}
</script>
