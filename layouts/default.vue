<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
$font: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', Arial, sans-serif;
$base-font-size: 10px;
$nuxt-green: #3b8070;
$nuxt-dark-green: #35495e;
$white: #fff;

html {
  font-family: $font;
  font-size: $base-font-size;
  word-spacing: 1px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid $nuxt-green;
  color: $nuxt-green;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: $white;
  background-color: $nuxt-green;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid $nuxt-dark-green;
  color: $nuxt-dark-green;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: $white;
  background-color: $nuxt-dark-green;
}
</style>
