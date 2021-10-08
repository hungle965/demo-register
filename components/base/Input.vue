<template lang="pug">
.inputContainer(:class='classes')
  .label(v-if='label') {{ label }}
  input.input(
    v-model='value',
    :placeholder='placeholder',
    :type='calTypeValue',
    v-on='$listeners'
  )
  transition(name='text-fade')
    .textError(v-if='error') {{ error }}
  img.iconShowPassword(
    v-if='type === "password"',
    src='@/assets/img/svg/show-password.svg',
    alt='icon',
    @click='toggleTypePassword'
  )
</template>

<script>
import { stringProp } from '@/helper/props'
export default {
  props: {
    propVal: stringProp(),
    label: stringProp(),
    placeholder: stringProp(),
    error: stringProp(),
    type: stringProp('text'),
  },

  model: {
    prop: 'propVal',
    event: 'onChange',
  },

  data() {
    return {
      // model state
      value: '',

      // ui state
      showText: false,
    }
  },

  computed: {
    classes() {
      return {
        error: this.error,
      }
    },

    calTypeValue() {
      if (this.type !== 'password') return this.type
      if (this.showText) return 'text'
      return 'password'
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

  methods: {
    toggleTypePassword() {
      this.showText = !this.showText
      console.log('show text', this.showText)
    },
  },
}
</script>

<style lang="scss" scoped>
.inputContainer {
  width: 100%;
  position: relative;

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
    font-size: 12px;

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

  .iconShowPassword {
    position: absolute;
    right: 0;
    z-index: 100;
    bottom: calc((38px / 2) - 5px);

    margin: auto 10px;
    cursor: pointer;
  }

  &.error {
    .input {
      border: 1px solid #de3235;
    }
  }
}
</style>
