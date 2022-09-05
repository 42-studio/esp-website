<template>

  <div class="skew" :style="style()">
    <slot />
  </div>

</template>

<script>

export default {

  name: 'EspBackground',

  props: {

    image: {
      type: [String, null],
      required: false,
      default: null,
      description: 'Path to background image.'
    },

    color: {
      type: [String, null],
      required: false,
      default: null,
      description: 'Background color of tile'
    },

    attachment: {
      type: String,
      default: 'fixed',
      description: 'Background Attachment.'
    },

    size: {
      type: String,
      default: 'cover',
      description: 'Background Size.'
    },

    minHeight: {
      type: String,
      default: '75vh',
      description: 'Minimum cell height.'
    }

  },

  methods: {

    style () {
      let options = {
        'min-height': this.minHeight
      }

      if (this.color != null) {
        options = {
          ...options,
          'background-color': this.color
        }
      }

      if (this.image != null) {
        options = {
          ...options,
          'background-image': 'url(' + require(`@/assets/img/${this.image}`) + ')',
          'background-size': this.size,
          'background-attachment': this.attachment
        }
      }

      return options
    }

  }

}

</script>
