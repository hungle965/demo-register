<template lang="pug">
RegisterLayout(@onCancel='$emit("onCancel")')
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
    BaseButton(
      :loading='isLoading',
      @click='handleSubmitForm',
      :disabled='!this.$v.username.required || !this.$v.email.required || !this.$v.email.email'
    ) {{ $t("next") }}
</template>
<script>
import RegisterLayout from '@/components/modals/register-layout/RegisterLayout'

import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    RegisterLayout,
  },

  data() {
    return {
      // user state
      username: '',
      email: '',

      // server error state
      usernameServerError: '',
      emailServerError: '',

      // display state
      isLoading: false,
    }
  },

  computed: {
    usernameError() {
      if (this.$v.$dirty && !this.$v.username.required)
        return this.$t('username_required')
      if (this.usernameServerError) return this.$t('username_used')
      return ''
    },

    emailError() {
      if (this.$v.$dirty && !this.$v.email.required)
        return this.$t('email_required')
      if (this.$v.$dirty && !this.$v.email.email)
        return this.$t('email_invalid')
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

      console.log(this.$v)

      // validate failed
      if (this.$v.$invalid) return

      // validate success
      this.loading()
      this.$api_instance
        .checkRegisterInfo(this.email, this.username)
        .then(res => {
          console.log('success: ', res)
          this.usernameServerError = res.data.data.username
          this.emailServerError = res.data.data.email

          if (!this.usernameServerError && !this.emailServerError) {
            console.log('handle next step 2')
          }
        })
        .catch(err => {
          console.log('error: ', err)
        })
        .finally(() => {
          this.loaded()
        })
    },

    severCheckValue() {},

    loading() {
      this.isLoading = true
    },

    loaded() {
      this.isLoading = false
    },
  },
}
</script>
<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;

.step1 {
  @include bodyRegisterModal;
}
</style>
