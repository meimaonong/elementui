<template>
  <div id="app">
    <sysHeader></sysHeader>
    <div class="main_w">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sysHeader from './layout/header/header.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {

    

  },
  components: {
    sysHeader
  }
}
</script>

<style lang="less">
body {
    font-size: 14px;
    margin: 0;
}

a {
    color: #4078c0;
    text-decoration: none;
}

#app {
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  position: relative;
  width: 100%;

  .main_w{
    padding: 60px 0 20px;
    height: 2000px;
    z-index: 9;
  }
  .main_c{
    padding: 20px;
  }

  .el-pagination{
    padding: 20px 0;
    text-align: right;
  }

}

</style>
