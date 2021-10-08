<template lang="pug">
transition(name='slide-fade')
  .modalContainer(v-if='isOpen')
    .backdrop
    RegisterLayout(@onCancel='$emit("onCancel")')
      swiper(ref='modalSwiper', :options='{ allowTouchMove: false }')
        swiper-slide
          Step2
        swiper-slide
          Step1(@nextStep='handleStep1Complete')
        //- swiper-slide
        //-   Step2
</template>
<script>
import Step1 from '@/components/modals/register-modal-component/Step1'
import Step2 from '@/components/modals/register-modal-component/Step2'
import RegisterLayout from '@/components/modals/register-layout/RegisterLayout'

import { booleanProp } from '@/helper/props'

const INDEX_SLIDE_STEP_2 = 2

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
    }
  },

  computed: {
    swiperInstance() {
      if (!this.$refs.modalSwiper || !this.$refs.modalSwiper.$swiper)
        return null
      return this.$refs.modalSwiper.$swiper
    },
  },

  methods: {
    handleStep1Complete(data) {
      this.username = data.username
      this.email = data.email

      this.swiperInstance.slideTo(INDEX_SLIDE_STEP_2)
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
