<template>
  <div class="wiper">
    <wiper-button v-model="show"/>
    <div
      v-if="show"
      class="wiper__overlay"
    >
      <p>8====></p>
    </div>
  </div>
</template>

<script>
import WiperButton from '@/components/WiperButton.vue'

export default {
  components: {
    WiperButton,
  },

  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss">
.wiper {
  color: #123456;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
