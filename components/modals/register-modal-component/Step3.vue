<template lang="pug">
.step3
  label Congratulations, you have successfully created an account
  NuxtLink(to='/login')
    .redirect Click here to login
</template>
<script>
export default {}
</script>
<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;

.step3 {
  @include bodyRegisterModal;
  min-height: 265px;

  text-align: center;

  .redirect {
    text-decoration: underline;
    cursor: pointer;
    color: var(--colorText2);
  }
}
</style>
