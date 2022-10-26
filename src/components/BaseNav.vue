<template>
  <nav
    class="navbar"
    :class="[
      { 'navbar-expand-lg': expand },
      { [`navbar-${effect}`]: effect },
      { 'navbar-transparent': transparent },
      { [`bg-${type}`]: type },
      { rounded: round }
    ]"
  >
    <div class="d-flex align-content-around justify-content-center flex-fill">
      <slot name="container-pre" />

      <slot name="brand">
        <a class="navbar-brand" @click.prevent="onTitleClick">
          {{ title }}
        </a>
      </slot>

      <navbar-toggle-button
        :toggled="toggled"
        :target="contentId"
        @click.native.stop="toggled = !toggled"
      />

      <slot name="container-after" />

      <div
        class="collapse navbar-collapse"
        :class="{ show: toggled }"
        :id="contentId"
        v-click-outside="closeMenu"
      >
        <div class="navbar-collapse-header">
          <slot name="content-header" :close-menu="closeMenu" />
        </div>

        <slot :close-menu="closeMenu" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  // box-sizing: border-box;
  width: 100%;
  max-width: 1920px !important;
  padding: 40px 0 !important;
}
</style>

<script>
import NavbarToggleButton from "./NavbarToggleButton";

export default {
  name: "BaseNav",

  components: {
    NavbarToggleButton
  },

  props: {
    type: {
      type: String,
      default: "primary",
      description:
        "Navbar type (e.g default, primary, warning, danger, info, success)"
    },

    title: {
      type: String,
      default: "",
      description: "Title of navbar"
    },

    effect: {
      type: String,
      default: "dark",
      description: "Effect of the navbar (light/dark)"
    },

    round: {
      type: Boolean,
      default: false,
      description: "Whether navbar has rounded corners"
    },

    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent"
    },

    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain 'navbar-expand-lg' class"
    },

    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description: "Id for menu"
    }
  },

  data() {
    return {
      toggled: false
    };
  },

  methods: {
    onTitleClick(evt) {
      this.$emit("title-click", evt);
    },

    closeMenu() {
      this.toggled = false;
    }
  }
};
</script>
