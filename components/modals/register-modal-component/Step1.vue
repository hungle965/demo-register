<template lang="pug">
RegisterLayout(@onCancel='$emit("onCancel")')
  .step1
    | user name
</template>
<script>
import RegisterLayout from '@/components/modals/register-layout/RegisterLayout'
export default {
  components: {
    RegisterLayout,
  },
}
</script>
<style lang="scss" >
.step1 {
  min-height: 300px;
  background: white;
  border-radius: 16px 16px 0 0;
  overflow: hidden;

  color: #1d222f;
}
</style>
