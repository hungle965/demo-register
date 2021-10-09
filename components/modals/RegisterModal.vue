<template lang="pug">
transition(name='slide-fade')
  .modalContainer(v-if='isOpen')
    .backdrop
    RegisterLayout(@onCancel='onCancel')
      swiper(ref='modalSwiper', :options='{ allowTouchMove: false }')
        swiper-slide
          Step1(@nextStep='handleStep1Complete')
        swiper-slide
          Step2(
            :basicInforUser='{ username, email }',
            :isActive='isStep2Active'
          )
</template>
<script>
import Step1 from '@/components/modals/register-modal-component/Step1'
import Step2 from '@/components/modals/register-modal-component/Step2'
import RegisterLayout from '@/components/modals/register-layout/RegisterLayout'

import { booleanProp } from '@/helper/props'

const SLIDE_CHANGE_SPEED = 1000
const DELAY_EFFECT = 200

export default {
  components: {
    Step1,
    Step2,
    RegisterLayout,
  },

  props: {
    isOpen: booleanProp(),
  },

  data() {
    return {
      username: '',
      email: '',

      //ui state
      isStep2Active: false,
      timeout: 0,
    }
  },

  methods: {
    handleStep1Complete(data) {
      this.username = data.username
      this.email = data.email

      console.log('detect event from modal')

      this.setActiveStep2()
    },

    setActiveStep2() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$refs.modalSwiper.$swiper.slideNext()
        this.isStep2Active = true
      }, DELAY_EFFECT)
    },

    onCancel() {
      this.$emit('onCancel')
      this.isStep2Active = false
    },
  },
}
</script>
<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;
.modalContainer {
  @include overBody;
  @include flexCenter;

  z-index: var(--layerModal);

  > .backdrop {
    @include overBody(absolute);

    background: var(--colorBackdrop);
    opacity: 0.8;
  }

  > .contentWrapper {
    position: relative;
    min-width: 350px;
    min-height: 400px;

    background: linear-gradient(
      180deg,
      rgba(109, 189, 215, 0.5) 0%,
      rgba(49, 126, 177, 0.2) 100%
    );
    padding: 5px;
  }
}
</style>
