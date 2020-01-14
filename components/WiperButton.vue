<template>
  <div class="wiper-button">
    <input
      v-model="model"
      type="checkbox"
    >
  </div>
</template>

<script>
import vModel from '@/mixins/vModel'

export default {
  mixins: [
    vModel('model', [Boolean], null),
  ],
}
</script>

<style lang="scss">
.wiper-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 2;
}
</style>
