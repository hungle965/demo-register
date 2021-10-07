<template lang="pug">
button.btn(type='submit', @click='createRipple', v-on='$listeners')
  slot
</template>

<script>
export default {
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

  height: 40px;
  width: 100%;
  max-width: 240px;

  background: var(--colorPrimary);
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  cursor: pointer;
  overflow: hidden;

  .ripple {
    z-index: 100;
    position: absolute; /* The absolute position we mentioned earlier */
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
