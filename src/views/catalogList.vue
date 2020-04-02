<template>
  <div class="catalog-list">
    <div class="catalog-list-title">
      <h1>当代贵州2020-08期</h1>
      <div class="catalog-list-info">
        <span>来源：《当代贵州》</span>
        <span>2020/02</span>
        <span>2020-02-02 15:37:09</span>
      </div>
    </div>
    <div class="catalog-list-content">
      <div class="catalog-list-footer">
        <div class="catalog-list-one">
          <catalog :list="list" :pdfUrl="pdfUrl"></catalog>
        </div>
        <div class="catalog-list-two">
          <relevant></relevant>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Catalog from './children/catalog'
import Relevant from './children/relevant'
import ajax from '@/api/api'
export default {
  components: {
    Catalog,
    Relevant
  },
  data () {
    return {
      list: [],
      pdfUrl: JSON.parse(this.$route.query.item).pdfUrl
    }
  },
  mounted(){
    this.contentlist()
  },
  methods: {
    contentlist () {
      let param = {
        // token: sessionStorage.getItem('token'),
        category_id: JSON.parse(this.$route.query.item).id,
      }
      ajax.contentlist(param).then(res=>{
        if(res.data.success===1) {
          this.list = res.data.data
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.catalog-list {
  .catalog-list-title {
    margin-bottom: 20px;
  }

  .catalog-list-info {
    span:nth-child(2) {
      margin-left: 10px;
    }

    span:nth-child(3) {
      margin-left: 20px;
      color: #666;
    }
  }
  .catalog-list-footer {
    display: flex;
    justify-content: center
  }
  .catalog-list-content {
    border-top: 1px solid #eee;
    padding: 20px 0;
    margin:0 auto;
    overflow: hidden;
    width 1000px
  }

  .catalog-list-one {
    float: left;
    width: 370px
    margin-right 60px
  }

  .catalog-list-two {
    width: 370px;
    float: left;
    margin-left 60px
  }
}
</style>

