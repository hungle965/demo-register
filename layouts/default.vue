<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/layouts/default-component/Header'
import Footer from '@/layouts/default-component/Footer'
export default {
  name: 'default',
  components: {
    Header,
    Footer,
  },
}
</script>
