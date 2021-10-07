const options = {
  langDir: '~/assets/locales/',
  lazy: true,
  defaultLocale: 'en',
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
    { code: 'vi', iso: 'vi-VN', name: 'Tiếng Việt', file: 'vi.js' },
  ],
  vueI18n: {
    fallbackLocale: 'en',
  },
}

export default function() {
  this.addModule(['@nuxtjs/i18n', options])
}
