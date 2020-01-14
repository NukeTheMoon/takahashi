<template>
  <div class="wiper">
    <wiper-button v-model="show"/>
    <div class="wiper__rotate">
      <div class="wiper__move">
        <div class="wiper__reverse">
          <div class="wiper__inner">
            <wiper-menu/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Expo } from 'gsap'

import WiperButton from '@/components/WiperButton.vue'
import WiperMenu from '@/components/WiperMenu.vue'

export default {
  components: {
    WiperButton,
    WiperMenu,
  },

  created() {
    if (this.tl) { return }

    this.tl = new TimelineMax({ paused: true })
  },

  mounted() {
    if (!this.tl) { return }

    const rotateFrom = 70
    const rotateTo = 110
    const yPercentFrom = -100
    const yPercentTo = 0
    const common = {
      ease: Expo.easeInOut,
      duration: 1,
      force3D: true,
    }

    this.tl.fromTo('.wiper__rotate', {
      rotate: rotateFrom,
    }, {
      rotate: rotateTo,
      ...common,
    }, 0)

    this.tl.fromTo('.wiper__move', {
      yPercent: yPercentFrom,
    }, {
      yPercent: yPercentTo,
      ...common,
    }, 0)

    this.tl.fromTo('.wiper__reverse', {
      yPercent: -yPercentFrom,
      rotate: -rotateFrom,
    }, {
      yPercent: -yPercentTo,
      rotate: -rotateTo,
      ...common,
    }, 0)
  },

  watch: {
    show(val) {
      if (!this.tl) { return }

      if (val) {
        this.tl.play()
      } else {
        this.tl.reverse()
      }
    },
  },

  data() {
    return {
      show: false,
      tl: null,
    }
  },
}
</script>

<style lang="scss">
.wiper {
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  &__rotate {
    width: 100vw;
    height: 100vh;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__move {
    overflow: hidden;
    width: calc(34.202vw + 93.9693vh);
    height: calc(93.9693vw + 34.202vh);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  &__reverse {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__inner {
    position: relative;
    flex: 0 0 100vw;
    height: 100vh;
  }
}
</style>
