<template>
  <div class="catalog">
    <div class="catalog-img" v-if="1 === 1">
      <img src="../../assets/u83.png" alt="" />
    </div>
    <div class="catalog-list-title">
      <div class="catalog-title">目录</div>
      <div class="list">
        <ul v-if="list&&list.length!==0">
          <li v-for="(item,index) in list" :key="index" @click="goDetail(item)">{{item.title}}</li>
        </ul>
      </div>
    </div>
    <div class="catalog-button">
      <el-button type="danger" @click="$router.push({path:'/home'})">查看往期</el-button>
      <el-button @click="downloadpdf()">下载pdf</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
    pdfUrl: String
  },
  methods: {
    downloadpdf() {
      window.open(this.pdfUrl)
    },
    // 去文章详情页
    goDetail (item) {
      let params = JSON.stringify({
        id: item.id
      })
      this.$router.push({path:'/articleDetails',query:{params:params}})
    }
  }
}
</script>
<style lang="stylus" scoped>
.catalog {
  width: 300px;
  margin: 0 auto;

  .catalog-img {
    width: 300px;
    height: 300px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .catalog-list-title {
    .catalog-title {
      text-align: center;
      font-size: 20px;
      margin: 20px 0;
      font-weight: bold;
    }

    .list {
      font-size: 16px;
      color: #333;

      li {
        margin: 15px 0;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  .catalog-button {
    margin-top 50px
    button {
      width 120px
    }
  }
}
</style>
