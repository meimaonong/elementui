<template>
  <div id="app">
    <sysHeader></sysHeader>
    <router-view></router-view>
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
    background: #f0f0f0;
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
}

</style>
