<template lang="pug">
.inputContainer
  .label(v-if='label') {{ label }}
  input.input(:placeholder='placeholder', v-on='$listeners')
</template>

<script>
import { stringProp } from '@/helper/props'
export default {
  props: {
    label: stringProp(),
    placeholder: stringProp(),
  },
}
</script>

<style lang="scss" scoped>
.inputContainer {
  width: 100%;

  .label {
    margin-bottom: 4px;

    text-align: center;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }

  .input {
    height: 38px;
    width: 100%;
    background: #c2d2d7;
    border-radius: 10px;
    padding: 0 12px;

    text-align: center;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(29, 34, 47, 0.5);
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(29, 34, 47, 0.5);
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(29, 34, 47, 0.5);
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }
}
</style>
