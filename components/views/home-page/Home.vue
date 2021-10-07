<template lang="pug">
.home
  img.homeImg(src='https://i.imgur.com/HZMnjT6.png', alt='alt')
  BaseButton.homeBtn(@click='toggleModal') {{ $t("register") }}
  RegisterModal(:isOpen='isOpenRegisterModal', @onCancel='toggleModal')
</template>

<script>
import RegisterModal from '@/components/modals/RegisterModal'

export default {
  components: {
    RegisterModal,
  },

  data() {
    return {
      isOpenRegisterModal: false,
    }
  },

  methods: {
    toggleModal() {
      this.isOpenRegisterModal = !this.isOpenRegisterModal
    },
  },
}
</script>


<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;
@use '@/assets/css/_func.scss' as *;

.home {
  @include flexCenter;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  .homeImg {
    width: 100%;
    max-width: 600px;
  }

  .homeBtn {
    margin-top: spacing(loose);
  }
}
</style>
