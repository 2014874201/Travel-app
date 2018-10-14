<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {
          id: 1,
          imgUrl: 'http://img.mp.itc.cn/upload/20170225/dc9be9d4edd343c9a51681c7294abc06_th.jpg'
        },
        {
          id: 2,
          imgUrl: 'http://img.mp.itc.cn/upload/20170225/f0f015cac9364c85998859fd2c09f37e_th.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
