<template>
  <div class="hr-wrapper">
    <hr class="custom-hr" />
    <img
      src="@/assets/img/monochrome-logo.png"
      alt="monochrome logo"
      class="monochrome-logo"
    />
    <hr class="custom-hr" />
  </div>
</template>

<style lang="scss">
.hr-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .monochrome-logo {
    width: 1.8rem;
    height: 1.8rem;
  }

  .custom-hr {
    border-top: 0.5px solid rgba(128, 128, 128, 0.6);
  }
}
</style>
