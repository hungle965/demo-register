<template lang="pug">
button.btn(
  v-wave,
  type='submit',
  :disabled='disabled',
  :class='classes',
  v-on='$listeners',
  @click='createRipple'
)
  slot
</template>

<script>
import { enumProps, booleanProp } from '@/helper/props'

export default {
  props: {
    variant: enumProps('primary', 'secondary'),
    disabled: booleanProp(),
  },

  computed: {
    classes() {
      return {
        secondary: this.variant === 'secondary',
        disabled: this.disabled,
      }
    },
  },

  methods: {
    createRipple(e) {
      this.handleAnimation(e)
    },

    handleAnimation(event) {
      const button = event.currentTarget

      const circle = document.createElement('span')
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      const radius = diameter / 2

      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
      circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
      circle.classList.add('ripple')

      const ripple = button.getElementsByClassName('ripple')[0]

      if (ripple) {
        ripple.remove()
      }

      button.appendChild(circle)
    },
  },
}
</script>

<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;

.btn {
  @include textStyleButton;

  position: relative;
  z-index: 100;

  height: 40px;
  width: 100%;
  max-width: 240px;

  background: var(--colorPrimary);
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  cursor: pointer;
  overflow: hidden;

  transition: background 400ms;

  &.secondary {
    background: var(--colorSecondary);
  }

  &.disabled {
    cursor: not-allowed;
    background: var(--colorDisabledButton);
  }
}
</style>
