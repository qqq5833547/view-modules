<template>
  <div class="img-title">
    <div class="list-img">
      <img src="../../assets/news.jpg" alt="" />
      <div class="img-title">
        从第一个到第零个，贵州疫情地图从第一个到第零个，贵州疫情地图从第一个到第零个，贵州疫情地图
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.img-title {
  .list-img {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .img-title {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40px;
      line-height: 30px;
      background: #000;
      opacity: 0.7;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>