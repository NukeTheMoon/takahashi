<template>
  <div class="wiper">
    <wiper-button />
  </div>
</template>

<script>
import WiperButton from '~/components/WiperButton.vue'

export default {
  components: {
    WiperButton,
  },
}
</script>

<style lang="scss">
.wiper {
  color: #123456;
}
</style>
