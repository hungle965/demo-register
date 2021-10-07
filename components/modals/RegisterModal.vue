<template lang="pug">
transition(name='slide-fade')
  .modalContainer(v-if='isOpen')
    .backdrop
    Step1(@onCancel='$emit("onCancel")')
</template>
<script>
import Step1 from '@/components/modals/register-modal-component/Step1'

import { booleanProp } from '@/helper/props'

export default {
  components: {
    Step1,
  },

  props: {
    isOpen: booleanProp(),
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
