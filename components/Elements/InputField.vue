<script setup>

const props = defineProps({

  label: String,
  name: String,
  errors: Object

})

const id = `input-${props.name}`
const message = computed(() => props.name in props.errors ? props.errors[props.name] : '')

</script>

<template>

  <div class="relative pb-5 mb-2" :class="{ 'input-error': message.length }">

    <label :for="id" class="form-label">
      {{ props.label }}
    </label>

    <slot :id="id" class="form-input" />

    <div class="absolute bottom-0 left-0 px-2 text-xs text-orange-400">
      {{ message }}
    </div>

  </div>

</template>
