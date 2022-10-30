<template>
  <div id="app">
    <main>
      <portal-target name="modal" multiple />

      <router-view name="header" />

      <fade-transition origin="center" mode="out-in" :duration="400">
        <router-view />
      </fade-transition>

      <router-view name="footer" />
    </main>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>
