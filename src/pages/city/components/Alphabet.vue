<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 因为数据初次渲染的时候，list列表项里面的数据都是空的，所以初始化的对象
  // 是空对象，页面刚刚加载的时候，没有数据，当ajax获取到数据的时候，页面重新渲染，
  // 这时updated执行，再获取offsetTop的数据
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText) // 获取当前点击的字母，并广播出去父组件接收
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    // 因为touchMove频率吕很跟高，消耗性能。所以这里使用定时器来对函数进行节流。，先在数据
    // 里面定义一个timer.如果里面有timer的时候，再执行这个函数，清除原来的timer,
    // 在16前又执行move的操作则清除上一个，在16毫秒之后，再执行新的函数
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
