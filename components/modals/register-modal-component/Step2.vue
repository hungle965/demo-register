<template lang="pug">
form.step2
  BaseInput(
    v-model='password',
    type='password',
    :label='$t("password")',
    :placeholder='$t("enter_password")',
    :styleError='Boolean(passwordError)',
    @input='handleInputChange'
  )
  BaseInput(
    v-model='cfPassword',
    type='password',
    :label='$t("confirm_password")',
    :placeholder='$t("re_confirm_password")',
    :styleError='Boolean(cfPasswordError)',
    @input='handleInputChange'
  )
  .requirementsContainer
    .header(:class='{ error: passwordError }')
      label Requirements
      .expandIcon(@click='toggleRequirement')
        Minus(v-if='isRequirement')
        Plus(v-else)
    .content(:class='{ show: isRequirement }')
      .item(v-for='(item, i) in validateData', :key='item.func')
        .iconChecking
          img(
            v-if='item.isValidate',
            src='@/assets/img/svg/checked.svg',
            alt='ic_checked'
          )
          img(
            v-if='!item.isValidate && $v.$dirty',
            src='@/assets/img/svg/checking-error.svg',
            alt='ic_error'
          )
        .validateString {{ item.errStr }}
  .labelError(v-if='cfPasswordError') {{ cfPasswordError }}
  BaseButton(
    :disabled='$v.$invalid',
    :loading='isLoading',
    @click='handleSubmitForm'
  ) {{ $t("sign_up") }}
</template>
<script>
import Minus from '@/components/icons/Minus'
import Plus from '@/components/icons/Plus'

import { required, sameAs } from 'vuelidate/lib/validators'

const MIN_LENGTH_PASSWORD = 8
const PATTERN_LOWERCASE = /[a-z]/
const PATTERN_UPPERCASE = /[A-Z]/
const PATTERN_NUMBER = /[0-9]/
const PATTERN_SPECIAL_CHARACTER = /[.#?!@$%^&*-]/

const minLength = str => {
  if (!str) return false
  return str.length >= MIN_LENGTH_PASSWORD
}

const hasLowerCase = str => {
  return PATTERN_LOWERCASE.test(str)
}

const hasUpperCase = str => {
  return PATTERN_UPPERCASE.test(str)
}

const hasNumber = str => {
  return PATTERN_NUMBER.test(str)
}

const hasSpecialCharacter = str => {
  return PATTERN_SPECIAL_CHARACTER.test(str)
}

export default {
  components: {
    Minus,
    Plus,
  },

  data() {
    return {
      // user state
      password: '',
      cfPassword: '',

      // display state
      isLoading: false,
      isRequirement: true,
      validateData: [
        {
          func: 'minLength',
          errStr: 'Must contain at least 8 characters',
          isValidate: false,
        },
        {
          func: 'hasLowerCase',
          errStr: 'Must contain at least 1 lowercase (a-z)',
          isValidate: false,
        },
        {
          func: 'hasUpperCase',
          errStr: 'Must contain at least 1 uppercase (A-Z)',
          isValidate: false,
        },
        {
          func: 'hasNumber',
          errStr: 'Must contain at least one digit (0-9)',
          isValidate: false,
        },
        {
          func: 'hasSpecialCharacter',
          errStr: 'Must contain at least 1 special character (punctuation) ',
          isValidate: false,
        },
      ],
    }
  },

  validations: () => ({
    password: {
      required,
      minLength,
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      hasSpecialCharacter,
    },
    cfPassword: {
      required,
      sameAssPassword: sameAs('password'),
    },
  }),

  computed: {
    passwordError() {
      if (!this.$v.$dirty) return ''
      return this.$v.password.$invalid
    },

    cfPasswordError() {
      if (!this.$v.$dirty) return ''
      if (!this.$v.cfPassword.required) return this.$t('cf_password_required')
      if (!this.$v.cfPassword.sameAssPassword)
        return this.$t('The password you entered does not match.')
      return ''
    },
  },

  methods: {
    handleSubmitForm(e) {
      e.preventDefault()

      console.log('submit...', this.$v)

      // handle validate input
      this.$v.$touch()

      // validate failed
      if (this.$v.$invalid) return
    },

    handleInputChange() {
      setTimeout(() => {
        console.log(this.$v.password)
        const updateValidateValue = this.validateData.map(element => {
          element.isValidate = this.$v.password[element.func]
          return element
        })
        this.validateData = [...updateValidateValue]
      }, 0)
    },

    severCheckValue() {},

    loading() {
      this.isLoading = true
    },

    loaded() {
      this.isLoading = false
    },

    toggleRequirement() {
      this.isRequirement = !this.isRequirement
    },
  },
}
</script>
<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;
@use '@/assets/css/_func.scss' as *;

.step2 {
  @include bodyRegisterModal;

  .requirementsContainer {
    @include textStyleMini;

    padding: spacing(tight);
    border-radius: 6px;

    background: #d5e7ed;

    .header {
      display: flex;
      justify-content: space-between;

      .expandIcon {
        cursor: pointer;
      }

      &.error {
        color: #aa0e11;
      }
    }

    .content {
      max-height: 0;
      padding-top: 0;
      overflow: hidden;
      transition-timing-function: ease-in-out;
      @include transitionFor(0.2s, max-height, padding-top);

      &.show {
        max-height: 200px;
        padding-top: spacing(tight);
      }

      .item {
        display: flex;
        align-items: flex-start;
        margin-bottom: spacing(extra-tight);

        &:last-child {
          margin-bottom: spacing(none);
        }

        .iconChecking {
          $size: 10px;

          @include flexCenter;
          width: $size;
          height: $size;
          border-radius: 100%;
          margin-right: spacing(extra-tight);
          transform: translateY(2px);

          background: #c2d2d7;
        }

        &.active {
          color: #4abe56;
        }

        &.error {
          color: #de3235;
          .iconChecking {
            background: #aa0e11;
          }
        }
      }
    }
  }

  > .labelError {
    @include textStyleError;
  }
}
</style>
