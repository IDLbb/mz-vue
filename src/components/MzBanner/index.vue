<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
  mounted () {
    //   临时对某个代码不校验
    /* eslint-disable */
    new Swiper('.swiper-container', {
        autoplay:true,
    // 如果需要分页器
        loop:true,
        pagination: {
        el: '.swiper-pagination',
        }
    })
     /* eslint-enable */
  }
}
</script>

<style lang="less">
    .swiper-container{
        height: 210px;

    }
</style>
