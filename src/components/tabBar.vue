<template>
  <div class="tabBar">
    <div class="tabBar-header">
      <div class="tabBar-width">
        <img
          @click="$router.push({ path: '/home' })"
          src="../assets/logo.png"
          alt=""
        />
        <span class="tabBar-header-right">
          <i class="el-icon-search"></i>
          <i class="el-icon-s-fold"></i>
        </span>
      </div>
    </div>
    <div class="tabBar-content">
      <div style="margin-bottom:20px" v-show="$route.meta.showTitle">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <template v-for="(item, index) in list">
            <el-breadcrumb-item
              :key="item + index"
              v-if="index < list.length - 1"
              :to="{ path: item.path }"
              >{{ item.name }}</el-breadcrumb-item
            >
            <el-breadcrumb-item v-else :key="item + index">{{
              item.name
            }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
      <el-collapse-transition>
        <router-view />
      </el-collapse-transition>
    </div>
    <div class="tabBar-footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from './footer'
export default {
  components: {
    Footer
  },
  data () {
    return {
      list: [],
      enterTransition: 'animated fadeIn',
      leaveTransition: 'animated fadeOut'
    }
  },
  mounted () {
    this.titles()
  },
  watch: {
    $route (to, from) {
      this.titles()
    }
  },
  methods: {
    // 生成面包屑
    titles () {
      this.list = []
      let breadLoadName = this.$route.path.substr(this.$route.path.lastIndexOf("/") + 1)
      let breadListAgo = this.$route.path.split(this.breadLoadName)
      let breadList = breadListAgo[0].split('/')
      let obje = {}
      for (let i of breadList) {
        for (let p of this.$route.matched) {
          if (i === p.path.substr(p.path.lastIndexOf("/") + 1)) {
            obje.path = p.path
            obje.name = p.meta.title
            this.list.push(obje)
            obje = {}
          }
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.tabBar {
  .tabBar-header {
    width: 100%;
    height: 80px;
    background-color: #1d6fb3;
    margin-bottom: 60px;
  }

  .tabBar-width {
    width: 1000px;
    margin: 0 auto;
  }

  .tabBar-content {
    width: 1000px;
    max-width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
  }

  .tabBar-header-right {
    float: right;
    height: 80px;
    line-height: 80px;

    i {
      font-size: 25px;
      color: #fff;
    }

    i:last-child {
      margin-left: 20px;
    }
  }
}
</style>