<template>

  <SlideYUpTransition :duration="animationDuration">

    <div class="modal fade" @click.self="closeModal"
         :class="[
           { 'show d-block': show },
           { 'd-none': !show },
           { 'modal-mini': type === 'mini' }
         ]"
         v-show="show"
         tabindex="-1"
         role="dialog"
         :aria-hidden="!show"
    >

      <div class="modal-dialog modal-dialog-centered" :class="[{ 'modal-notice': type === 'notice' }, modalClasses]">

        <div class="modal-content"
             :class="[
               gradient ? `bg-gradient-${gradient}` : '',
               modalContentClasses
             ]"
        >

          <div class="modal-header" :class="[headerClasses]" v-if="$slots.header">

            <slot name="header" />

            <slot name="close-button">

              <template v-if="showClose">
                <button type="button" class="close" @click="closeModal" data-dismiss="modal" aria-label="Close">
                  <span :aria-hidden="!show">×</span>
                </button>
              </template>

            </slot>

          </div>

          <div class="modal-body" :class="bodyClasses">
            <slot />
          </div>

          <div class="modal-footer" :class="footerClasses" v-if="$slots.footer">
            <slot name="footer" />
          </div>

        </div>

      </div>

    </div>

  </SlideYUpTransition>

</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'

export default {

  name: 'Modal',

  components: {
    SlideYUpTransition
  },

  props: {

    show: Boolean,

    showClose: {
      type: Boolean,
      default: true
    },

    type: {
      type: String,
      default: '',
      validator (value) {
        const acceptedValues = ['', 'notice', 'mini']
        return acceptedValues.indexOf(value) !== -1
      },
      description: 'Modal type (notice|mini|"")'
    },

    modalClasses: {
      type: [Object, String],
      description: 'Modal dialog css classes'
    },

    modalContentClasses: {
      type: [Object, String],
      description: 'Modal dialog content css classes'
    },

    gradient: {
      type: String,
      description: 'Modal gradient type (danger, primary etc)'
    },

    headerClasses: {
      type: [Object, String],
      description: 'Modal Header css classes'
    },

    bodyClasses: {
      type: [Object, String],
      description: 'Modal Body css classes'
    },

    footerClasses: {
      type: [Object, String],
      description: 'Modal Footer css classes'
    },

    animationDuration: {
      type: Number,
      default: 500,
      description: 'Modal transition duration'
    }

  },

  watch: {
    show (val) {
      const documentClasses = document.body.classList
      if (val) {
        documentClasses.add('modal-open')
      } else {
        documentClasses.remove('modal-open')
      }
    }
  },

  methods: {
    closeModal () {
      this.$emit('update:show', false)
      this.$emit('close')
    }
  }

}

</script>
<style></style>
