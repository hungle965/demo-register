<template lang="pug">
form.step1
  BaseInput(
    v-model='username',
    :label='$t("username")',
    :placeholder='$t("enter_username")',
    :error='usernameError'
  )
  BaseInput(
    v-model='email',
    :label='$t("email_address")',
    :placeholder='$t("enter_email_address")',
    :error='emailError'
  )
  .labelError(v-if='error') {{ error }}
  BaseButton(
    :loading='isLoading',
    @click='handleSubmitForm',
    :disabled='!this.$v.username.required || !this.$v.email.required || !this.$v.email.email'
  ) {{ $t(isSuccess ? "success" : "next") }}
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'

import { mixLoading } from '@/libs/mixins/loading'

export default {
  mixins: [mixLoading()],

  data() {
    return {
      // modal state
      username: '',
      email: '',

      // server error state
      usernameServerError: '',
      emailServerError: '',
      error: '',
      isSuccess: false,
    }
  },

  computed: {
    usernameError() {
      if (!this.$v.$dirty) return ''
      if (!this.$v.username.required) return this.$t('username_required')
      if (this.usernameServerError) return this.$t('username_used')
      return ''
    },

    emailError() {
      if (!this.$v.$dirty) return ''
      if (!this.$v.email.required) return this.$t('email_required')
      if (!this.$v.email.email) return this.$t('email_invalid')
      if (this.emailServerError) return this.$t('email_used')
      return ''
    },
  },

  validations: () => ({
    username: { required },
    email: {
      required,
      email,
    },
  }),

  methods: {
    handleSubmitForm(e) {
      e.preventDefault()

      // handle validate input
      this.$v.$touch()

      // validate failed
      if (this.$v.$invalid) return

      // validate success
      this.handleValidateSuccess()
    },

    handleValidateSuccess() {
      this.loading()
      this.$api_instance
        .checkRegisterInfo(this.email, this.username)
        .then(res => {
          this.usernameServerError = res.data.data.username
          this.emailServerError = res.data.data.email

          if (!this.usernameServerError && !this.emailServerError) {
            this.isSuccess = true
            this.$emit('nextStep', {
              username: this.username,
              email: this.email,
            })
          }
        })
        .catch(err => {
          if (!err.response) return (this.error = 'some_thing_wrong')
          this.error = err.response.data.message
        })
        .finally(() => {
          this.loaded()
        })
    },
  },
}
</script>
<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;

.step1 {
  @include bodyRegisterModal;
  .labelError {
    @include textStyleError;
  }
}
</style>
