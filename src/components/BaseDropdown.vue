<template>
  <component
    class="dropdown"
    :is="tag"
    :class="[
      { show: isOpen },
      { dropdown: direction === 'down' },
      { dropup: direction === 'up' }
    ]"
    aria-haspopup="true"
    :aria-expanded="isOpen"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
    <slot name="title">
      <a
        class="dropdown-toggle nav-link"
        :class="{ 'no-caret': hideArrow }"
        data-toggle="dropdown"
      >
        <i :class="icon" />
        <span class="no-icon">{{ title }}</span>
      </a>
    </slot>
    <ul
      class="dropdown-menu"
      :class="[
        { 'dropdown-menu-right': position === 'right' },
        { show: isOpen },
        menuClasses
      ]"
    >
      <slot />
    </ul>
  </component>
</template>
<script>
export default {
  name: 'BaseDropdown',
  props: {
    direction: {
      type: String,
      default: 'down'
    },
    title: {
      type: String,
      description: 'Dropdown title'
    },
    icon: {
      type: String,
      description: 'Icon for dropdown title'
    },
    position: {
      type: String,
      description: 'Position of dropdown menu (right/left)'
    },
    menuClasses: {
      type: [String, Object],
      description: 'Dropdown menu classes'
    },
    hideArrow: {
      type: Boolean,
      description: 'Whether dropdown arrow is visible'
    },
    tag: {
      type: String,
      default: 'li',
      description: 'Dropdown html tag'
    },
    multiLevel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropDown () {
      if (this.multiLevel) {
        this.isOpen = true
      } else {
        this.isOpen = !this.isOpen
        this.$emit('change', this.isOpen)
      }
    },
    closeDropDown () {
      this.isOpen = false
      this.$emit('change', this.isOpen)
    }
  }
}
</script>
