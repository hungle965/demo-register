<template lang="pug">
.inputContainer(:class='classes')
  .label(v-if='label') {{ label }}
  input.input(v-model='value', :placeholder='placeholder', v-on='$listeners')
  .textError(v-if='error') {{ error }}
</template>

<script>
import { stringProp } from '@/helper/props'
export default {
  props: {
    propVal: stringProp(),
    label: stringProp(),
    placeholder: stringProp(),
    error: stringProp(),
  },

  model: {
    prop: 'propVal',
    event: 'onChange',
  },

  data() {
    return {
      value: '',
    }
  },

  computed: {
    classes() {
      return {
        error: this.error,
      }
    },
  },

  watch: {
    value(val) {
      this.$emit('onChange', val)
    },
    propVal(val) {
      this.value = val
    },
  },

  created() {
    this.value = this.propVal
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
    color: var(--colorText2);

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

  .textError {
    margin-top: 10px;

    color: #de3235;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }

  &.error {
    .input {
      border: 1px solid #de3235;
    }
  }
}
</style>
