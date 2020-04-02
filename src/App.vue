<template>
  <div id="app">
      <router-view v-if="isRouterAlive" />
    <button @click="login" v-show="shows">登录</button>
  </div>
</template>
<script>
// import axios from 'axios'
import ajax from '@/api/api'
import { mapState, mapMutations } from 'vuex'
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  computed: {
    ...mapState({
      token: state => state.token
    })
  },
  watch: {
    token () {
      this.token ? this.shows = false : this.shows = true
    }
  },
  data () {
    return {
      shows: true,
      isRouterAlive: true,
      enterTransition: 'animated fadeIn',
      leaveTransition: 'animated fadeOut'
    }
  },
  mounted () {
    this.token ? this.shows = false : this.shows = true
  },
  methods: {
    ...mapMutations(['getToken']),
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    },
    login () {
      let param = {
        username: 'tokentest2',
        password: this.$md5('123456')
      }
      ajax.postLogin(param).then(res => {
        if (res.data.success === 1) {
          this.getToken(res.data.token)
          this.shows = false
          this.reload()
        }
      }).catch(err => {
        this.$alert(err.data.data.message, '错误', {
          confirmButtonText: '确定',
          callback: action => {
            return
          }
        });
      })
    }
  }
}
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
