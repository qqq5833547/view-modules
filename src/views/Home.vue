<template>
  <div class="home">
    <div class="home-title">
      当代贵州电子版杂志目录
    </div>
    <div class="home-header">
      <RightBar></RightBar>
      <div class="home-content">
        <div class="lists">
          <div
            class="home-list"
            v-for="(item, i) in list"
            :key="i"
            @click="goContentList(item)"
          >
            <div class="home-img">
              <img :src="item.thumb" alt="" />
            </div>
            <div class="home-list-title">
              {{ item.name }}
            </div>
          </div>
          <div v-if="list && list.length === 0" style="text-align:center">
            暂无数据
          </div>
        </div>
        <div class="home-page">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-size="this.pageSize"
            layout="total, prev, pager, next"
            :total="num"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightBar from './children/rightBar'
// import axios from 'axios'
import ajax from '@/api/api'
export default {
  name: 'Home',
  components: {
    RightBar
  },
  data () {
    return {
      page: 1,
      pageSize: 12,
      list: [],
      num: 0,//期刊数量
    };
  },
  mounted () {
    this.getList()
  },
  methods: {
    handleCurrentChange (val) {
      this.page = val
      this.getList()
    },
    // 获取期刊列表
    getList () {
      let param = {
        // token: sessionStorage.getItem('token'),
        model_id: 1,
        page: this.page,
        page_size: 12
      }
      ajax.list(
        param
      ).then(res => {
        if (res.data.success === 1) {
          this.list = res.data.data
          this.num = Number(res.data.count)
        }
      })
    },
    goContentList (items) {
      let item = JSON.stringify({
        id: items.id,
        pdfUrl: items.pdfurl
      })
      this.$router.push({ path: '/cataLogList', query: { item: item } })
    },
  }
}
</script>
<style lang="stylus" scoped>
.home {
  position: relative;

  .home-header {
    display: flex;
  }

  .hoem-content {
    flex: 1;
  }

  .home-content {
    width: 100%;
    padding-top: 20px;
    margin-left: 80px;
    border-top: 1px solid #eee;

    .lists {
      min-height: 635px;
    }

    .home-list {
      float: left;
      width: 19%;
      margin-bottom: 40px;
      margin-left: 8%;
      cursor: pointer;

      .home-img {
        height: 200px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .home-list:nth-child(1) {
      margin-left: 0;
    }

    .home-list:nth-child(5) {
      margin-left: 0;
    }

    .home-list:nth-child(9) {
      margin-left: 0;
    }

    .home-list-title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #eee;
      font-size: 12px;
      color: #000;
      margin-top: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .home-page {
    clear: both;
    margin: 20px 0;
    text-align: right;
  }

  .home-title {
    position: absolute;
    right: 0;
    top: -40px;
  }
}
</style>
