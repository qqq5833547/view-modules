<template>
  <div class="article-details">
    <h1 class="article-details-title">
      {{ datas ? datas.title : "" }}
    </h1>
    <div class="article-details-auth" v-if="datas">
      <span>作者：{{ datas.author }}</span>
      <span>编辑：{{ datas.editor }}</span>
      <span>{{ datas.createtime | timestampToTime}}</span>
    </div>
    <div style="min-height:300px">
      <div v-if="datas" v-html="articleDetails"></div>
      <div v-else style="text-align:center">暂无内容</div>
    </div>
    <div class="share">
      <div class="follow">
        <img src="../assets/u65.png" alt="" />
        <div>关注公众号</div>
      </div>
      <div class="weixin">
        <img
          src="../assets/weixin.png"
          @mouseover="weixinlogo = true"
          @mouseout="weixinlogo = false"
          alt=""
        />
        <div
          class="weixin-logo"
          :style="{ display: weixinlogo ? 'block' : 'none' }"
        >
          <img src="../assets/wei_20181112154032.jpg" />
          <div>打开微信扫一扫</div>
        </div>
      </div>
      <div class="weibo">
        <img src="../assets/weibo.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import ajax from '@/api/api'
import MyXss from '../utils/xss'
export default {
  data () {
    return {
      weixinlogo: false,
      articleDetails: ``,
      datas: null
    }
  },
  filters: {
    timestampToTime (timestamp) {
      var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = (Number(date.getHours())<10?'0'+date.getHours():date.getHours()) + ':';
      var m = (Number(date.getMinutes())<10?'0'+date.getMinutes():date.getMinutes()) + ':';
      var s = (Number(date.getSeconds())<10?'0'+date.getSeconds():date.getSeconds());
      return Y + M + D + h + m + s;
    }
  },
  mounted () {
    this.getData()
    // console.log(JSON.parse(this.$route.query.params).id)
  },
  methods: {
    // 获取期刊列表
    getData () {
      // console.log(JSON.parse(this.$route.query.id))
      let param = {
        // token: sessionStorage.getItem('token'),
        article_id: JSON.parse(this.$route.query.params).id,
      }
      ajax.contentdetail(param).then(res => {
        if (res.data.success === 1) {
          this.datas = res.data.data
          this.articleDetails = MyXss.process(res.data.data.content)
          // this.articleDetails = MyXss.process('<div style="line-height:2em">是打算发发发</div><li>adfsf</li>')
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.article-details {
  margin-bottom: 20px;
  position: relative;

  .article-details-auth {
    margin-bottom: 20px;

    span {
      margin-right: 20px;
      font-size: 12px;
    }

    span:last-child {
      color: #666;
    }
  }

  .share {
    position: fixed;
    top: 120px;
    right: 20px;

    .follow {
      background-color: #eeeeee;
      color: red;
      width: 100px;
      height: 113px;
      text-align: center;
      font-size: 12px;

      img {
        width: 90px;
        height: 90px;
        margin-top: 2px;
      }
    }

    .weixin {
      width: 60px;
      height: 60px;
      margin: 20px auto;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }

      .weixin-logo {
        position: absolute;
        top: 0;
        left: -130px;
        width: 120px;
        height: 120px;
        border 1px solid #eeeeee
        color #000
        font-size 12px
        text-align center
        img {
          width 100px
          height 100px
        }
      }
    }

    .weibo {
      width: 60px;
      height: 60px;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>
