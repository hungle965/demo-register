<template lang="pug">
RegisterLayout(@onCancel='$emit("onCancel")')
  .step1
    BaseInput(
      v-model='username',
      :label='$t("username")',
      :placeholder='$t("enter_username")'
    )
    BaseInput(
      v-model='emailAddress',
      :label='$t("email_address")',
      :placeholder='$t("enter_email_address")'
    )
    BaseButton(disabled) {{ $t("next") }}
</template>
<script>
import RegisterLayout from '@/components/modals/register-layout/RegisterLayout'
export default {
  components: {
    RegisterLayout,
  },

  data() {
    return {
      username: '',
      emailAddress: '',
    }
  },
}
</script>
<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;

.step1 {
  @include bodyRegisterModal;
}
</style>
