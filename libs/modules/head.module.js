const {
  NUXT_ENV_BASE_API_URL = 'http://localhost:4000/',
  NUXT_ENV_FACEBOOK_APP_ID,
  NUXT_ENV_SITE_DESC = 'DEMO',
  NUXT_ENV_SITE_NAME = 'DEMO',
  NUXT_ENV_SITE_URL = 'http://localhost:3000/',
  NUXT_ENV_VERSION = 'dev',
} = process.env

export default function() {
  this.options.head = {
    title: NUXT_ENV_SITE_NAME,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400;1,700&family=Poppins:wght@300;400;500;600;700&display=swap',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: NUXT_ENV_SITE_DESC },
      /* ===[ Settings ]=== */
      { name: 'baseApiUrl', content: NUXT_ENV_BASE_API_URL },
      { name: 'version', content: NUXT_ENV_VERSION },
      /* ===[ OPEN GRAPH ]=== */
      { key: 'og:type', val: 'website' },
      { key: 'og:title', val: NUXT_ENV_SITE_NAME },
      { key: 'og:site_name', val: NUXT_ENV_SITE_NAME },
      { key: 'og:url', val: NUXT_ENV_SITE_URL },
      {
        key: 'og:image',
        val: `${NUXT_ENV_SITE_URL}/preview.jpeg?q=${NUXT_ENV_VERSION}`,
      },
      { key: 'og:image:type', val: 'image/jpeg' },
      { key: 'og:image:width', val: '1000' },
      { key: 'og:image:height', val: '440' },
      { key: 'og:image:alt', val: NUXT_ENV_SITE_NAME },
      { key: 'og:description', val: NUXT_ENV_SITE_DESC },
      { key: 'fb:app_id', val: NUXT_ENV_FACEBOOK_APP_ID },
      { key: 'og:updated_time', val: new Date().toISOString() },
    ],
  }
}
