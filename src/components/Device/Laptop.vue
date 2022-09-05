<template>

  <div class="device">
    <div class="screen" :style="screenStyle" :class="screenCss">
      <slot />
    </div>
  </div>

</template>

<script>

export default {

  name: 'DeviceLaptop',

  props: {

    screenStyle: {
      type: [String, Object],
      default: ''
    },

    screenCss: {
      type: [String, Object],
      default: ''
    }

  }

}

</script>

<style lang="scss" scoped>

.device {
  background-image: url('/img/devices/laptop.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  padding-bottom: 50%;
  position: relative;

  .screen {
    position: absolute;
    top: 6%;
    left: 48.5%;
    width: 70%;
    height: 86%;
    margin-left: -34%;
    border-radius: 0.75%;
    overflow: hidden;
  }
}

</style>
