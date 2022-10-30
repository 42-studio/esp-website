<template>
  <div class="section-wrapper">
    <div class="twilight purple-shadow above"></div>
    <div class="twilight white-shadow above"></div>
    <div class="content-container">
      <slot />
    </div>
    <div class="twilight white-shadow below"></div>
    <div class="twilight purple-shadow below"></div>
  </div>
</template>

<style lang="scss">
.content-container {
  background-color: #f0f8ff;
  position: relative;
  z-index: 9;
}

.twilight {
  position: relative;
  width: 100%;
  height: 5rem;
  border-radius: 50%;
}

.white-shadow {
  z-index: 2;
  box-shadow: 0px 0px 3.9rem 7.6rem #f0f8ff;
  background-color: #f0f8ff;

  &.above {
    transform: translateY(50%);
  }
  &.below {
    transform: translateY(-50%);
  }
}
.purple-shadow {
  z-index: 1;
  box-shadow: 0px 0px 16rem 10.6rem #5a349d;
  background-color: #f0f8ff;

  &.above {
    transform: translateY(150%);
  }
  &.below {
    transform: translateY(-150%);
  }
}
</style>
