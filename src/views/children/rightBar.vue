<template>
  <div class="rightBar">
    <div class="right-bar-header-img">
      <img src="../../assets/u83.png" alt="">      
    </div>
    <div class="right-bar-explain">
      <div>
        <span>来源：</span>
        当代先锋网
      </div>
      <div>
        <span>主办：</span>
        中共贵州省委当代贵州杂志社主管
      </div>
    </div>
    <div class="right-bar-relevant">
      <div class="list">
        <div class="lits-img">
          <img src="../../assets/u65.png" alt="">
        </div>
        <div class="list-title">
          天眼新闻官方微信
        </div>
      </div>
      <div class="list">
        <div class="lits-img">
          <img src="../../assets/u65.png" alt="">
        </div>
        <div class="list-title">
          天眼新闻APP
        </div>
      </div>
      <div class="list">
        <div class="lits-img">
          <img src="../../assets/u65.png" alt="">
        </div>
        <div class="list-title">
          天眼新闻APP官方微博
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
.rightBar {
  width 300px
  height auto
  border 1px solid #eee
  .right-bar-header-img {
    height 200px
    width 150px
    margin 20px auto
    img {
      width 100%
      height 100%
    }
  }
  .right-bar-explain {
    padding 10px
    border-top 1px solid #eee
    border-bottom 1px solid #eee
    font-size 14px
    margin-bottom 20px
    span {
      font-weight bold
    }
  }
  .right-bar-relevant {
    text-align center
    .lits-img {
      width 80px
      height 80px
      margin 0 auto
      img {
        width 100%
        height 100%
      }
    }
    .list-title {
      width 150px
      height 30px
      margin 10px auto
      line-height 30px
      text-align center
      font-size 12px
      background-color #eee
    }
  }
}
</style>
