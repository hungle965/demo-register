<template lang="pug">
transition(name='slide-fade')
  .modalContainer(v-if='isOpen')
    .backdrop
    RegisterLayout(@onCancel='onCancel')
      swiper(ref='modalSwiper', :options='{ allowTouchMove: false }')
        swiper-slide
          Step3
        swiper-slide
          Step1(@nextStep='handleStep1Complete')
        swiper-slide
          Step2(
            :basicInforUser='{ username, email }',
            :isActive='isStep2Active',
            @nextStep='handleStep2Complete'
          )
        swiper-slide
          Step3
</template>
<script>
import Step1 from '@/components/modals/register-modal-component/Step1'
import Step2 from '@/components/modals/register-modal-component/Step2'
import Step3 from '@/components/modals/register-modal-component/Step3'
import RegisterLayout from '@/components/modals/register-layout/RegisterLayout'

import { booleanProp } from '@/helper/props'

const DELAY_EFFECT = 200

export default {
  components: {
    Step1,
    Step2,
    Step3,
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

      this.setActiveStep2()
    },

    setActiveStep2() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$refs.modalSwiper.$swiper.slideNext()
        this.isStep2Active = true
      }, DELAY_EFFECT)
    },

    handleStep2Complete() {
      this.$refs.modalSwiper.$swiper.slideNext()
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
