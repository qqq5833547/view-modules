<template>
  <div class="relevant">
    <div class="love-to-see">
      <div class="love-to-see-title">爱看</div>
      <div class="love-to-see-list">
        <ImgTitle></ImgTitle>
        <ImgTitle></ImgTitle>
      </div>
    </div>
    <div class="original">
      <div class="original-title">原创</div>
      <div class="original-list">
        <ImgTitle></ImgTitle>
      </div>
    </div>
    <div class="hot-words">
      <div class="hot-words-title">热词</div>
      <div class="hot-words">
        <span :class="1===1?'active':''">新型冠状病毒</span>
         <span>新春走基层</span>
        <span>保障医用口罩</span>
        <span>保障医用口罩</span>
       
        <span>保障医用口罩</span>
        <span>保障医用口罩</span>
        <span>保障医用口罩</span>
        <span>战役日历</span>
        <span>杜富国</span>
      </div>
    </div>
  </div>
</template>
<script>
import ImgTitle from './imgTitle'
export default {
  components: {
    ImgTitle
  },
}
</script>
<style lang="stylus" scoped>
.relevant {
  .love-to-see {
    border-top 4px solid #1d6fb3
    margin-bottom 10px
    .love-to-see-title {
      font-size 25px
    }
  }
  .original {
    border-top 4px solid #1d6fb3
    margin-bottom 10px
    .original-title {
      font-size 25px
    }
  }
  .hot-words {
    .hot-words-title {
      font-size 25px
      border-top 4px solid #1d6fb3
      border-bottom 1px solid #eee
    }
    .hot-words {
      margin 0 10px
      span {
        padding 5px 7px
        border 1px solid #1d6fb3
        border-radius 20px
        display inline-block
        margin 5px
        cursor pointer
      }
      .active {
        background-color red
        border 1px solid red
      }
    }
  }
}
</style>