<template>
  <div
    class="tab-pane"
    v-show="active"
    :id="id || label"
    :class="{ active: active }"
    :aria-expanded="active"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'TabPane',
  props: ['label', 'id'],
  inject: ['addTab', 'removeTab'],
  data () {
    return {
      active: false
    }
  },
  mounted () {
    this.addTab(this)
  },
  destroyed () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeTab(this)
  }
}
</script>
<style></style>
