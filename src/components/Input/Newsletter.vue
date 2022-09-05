<template>

  <b-input-group style="margin-left: 58px;" class="my-4">

    <b-form-checkbox size="lg" v-model="input" name="marketing" switch>

      <i class="fa fa-announcement" /> Newsletter Signup? <br>

      <p style="padding-left: 6px">
        <i class="ml-1 mr-2" :class="state.icon" />
        <strong>{{ state.message }}</strong>
      </p>

    </b-form-checkbox>

  </b-input-group>

</template>

<script>

export default {

  name: 'InputNewsletter',

  props: {

    value: {
      type: Boolean,
      required: true
    }

  },

  computed: {

    input: {

      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }

    },

    state () {
      if (this.input === true) {
        return {
          icon: 'fa fa-check text-success',
          message: 'Yes, I would like to receive news updates.'
        }
      }

      return {
        icon: 'fa fa-times text-danger',
        message: 'No thank you.'
      }
    }

  }

}

</script>
