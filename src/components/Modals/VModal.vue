<template>

  <div>

    <portal :to="mount">
      <transition name="modal-wrapper">
        <template v-if="display">
          <div class="modal-wrapper" role="dialog" aria-modal="true">
            <div>
              <slot :close="close" />
            </div>
          </div>
        </template>
      </transition>
    </portal>

    <portal :to="mount">
      <transition name="modal-overlay">
        <template v-if="display">
          <div class="modal-overlay" @click="overlay" />
        </template>
      </transition>
    </portal>

    <slot name="action" :open="open" />

  </div>

</template>

<script>

export default {

  name: 'VModal',

  props: {

    mount: {
      type: String,
      default: 'modal'
    },

    persistent: {
      type: Boolean,
      default: false
    }

  },

  data: () => ({
    display: false
  }),

  methods: {

    open () {
      this.display = true
    },

    close () {
      this.display = false
    },

    overlay () {
      if (this.persistent === false) {
        this.close()
      }
    }

  }

}

</script>
