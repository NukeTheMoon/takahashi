<template>
  <div class="container">
    <div>
      <wiper />
      <logo />
      <h1 class="title">
        takahashi
      </h1>
      <h2 class="subtitle">
        sugoi desu ne
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Wiper from '@/components/Wiper.vue'

export default {
  components: {
    Logo,
    Wiper,
  },
}
</script>

<style lang="scss">
$font: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
$big-font: 100px;
$kinda-big-font: 42px;
$space-brown: #35495e;
$bog-pink: #526488;

html {
  font-size: 62.5%;
  overflow-x: hidden;
  overscroll-behavior-y: none;
}

body {
  font-family: serif;
  background-color: #f3f3f3;
  color: #101010;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 400;
  width: 100vw;
  text-rendering: optimizeLegibility;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $font;
  display: block;
  font-weight: 300;
  font-size: $big-font;
  color: $space-brown;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $bog-pink;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
