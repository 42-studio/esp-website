<template>
  <div>
    <select ref="select">
      <slot />
    </select>
  </div>
</template>
<script>
import Choices from 'choices.js'
import 'choices.js/public/assets/styles/choices.min.css'

export default {
  name: 'Selects',
  props: ['options', 'value'],
  mounted: function () {
    this.choicesInstance = new Choices(this.$refs.select)
    this.$refs.select.addEventListener('addItem', this.handleSelectChange)
    this.setChoices()
  },
  destroyed: function () {
    this.choicesInstance.destroy()
  },
  methods: {
    handleSelectChange (e) {
      this.$emit('input', e.target.value)
    },
    setChoices () {
      this.choicesInstance.setChoices(this.options, 'id', 'text', true)
    }
  }
}
</script>
<style></style>
