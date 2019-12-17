<template>
  <div class="wiper-button">
    <input
      v-model="valueModel"
      type="checkbox"
    >
  </div>
</template>

<script>
import vModel from '~/mixins/vModel.js'

export default {
  mixins: {
    vModel,
  },
}
</script>

<style lang="scss">
.wiper {
  color: #123456;
}
</style>
