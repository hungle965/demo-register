<template lang="pug">
.home
  img.homeImg(src='https://i.imgur.com/HZMnjT6.png', alt='alt')
  h2 Coming soon
  NuxtLink(to='/')
    h3 Back to home
</template>


<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;
@use '@/assets/css/_func.scss' as *;

.home {
  @include flexCenter;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  .homeImg {
    width: 100%;
    max-width: 600px;
  }
}
</style>
