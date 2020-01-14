<template>
  <div class="wiper-menu">
    <div class="wiper-menu__scroll">
      <div class="wiper-menu__layout">
        <ul
          ref="list"
          class="wiper-menu__list"
        >
          <li
            v-for="(item, idx) in items"
            :key="idx"
            class="wiper-menu__item"
          >
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Expo } from 'gsap'

export default {
  props: {
    isEnabled: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  created() {
    if (this.tl) { return }

    this.tl = new TimelineMax({ paused: true })
  },

  mounted() {
    const items = [ ...this.$refs.list.childNodes ]
    const duration = 1
    const delay = Math.max(0, duration - 0.1)
    const common = {
      ease: Expo.easeInOut,
      duration: 1,
      force3D: true,
    }

    items.forEach(item => {
      const tl = new TimelineMax()

      tl.fromTo(item, {
        opacity: 0,
      }, {
        opacity: 1,
        ...common,
      })
      this.tl.add(tl, `-=${delay}`)
    })
  },

  watch: {
    isEnabled(val) {
      if (!this.tl) { return }

      if (val) {
        this.tl.play(0)
      } else {
        this.tl.reverse()
      }
    },
  },

  data() {
    return {
      tl: null,
      items: [
        { title: 'What the fuck' },
        { title: 'did you just' },
        { title: 'fucking say to' },
        { title: 'me, you little' },
        { title: 'bitch? I\'ll have' },
        { title: 'you know I' },
        { title: 'graduated top' },
        { title: 'of my class in' },
        { title: 'the Navy Seals,' },
        { title: 'and I\'ve been' },
        { title: 'involved in' },
        { title: 'numerous secret' },
        { title: 'raids on Al-Quaeda' },
      ],
    }
  },
}
</script>

<style lang="scss">
  .wiper-menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #710f29;

    &__scroll {
      position: fixed;
      width: 100vw;
      will-change: transform;
    }

    &__layout {
      margin: 0 auto;
      width: 73vw;
      padding: 9.7vw 0 14vw;
    }

    &__list {
      list-style: none;
      user-select: none;
    }

    &__item {
      &:not(:last-child) {
        margin: 0 0 3vw;
      }

      p {
        font-size: 8vw;
        text-align: left;
        cursor: pointer;
      }
    }
  }
</style>
