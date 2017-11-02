<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {

    Vue.http.post("http://www.easy-mock.com/mock/5996a438059b9c566dc6de34/example/article/list", {}).then((response) => {
        console.log(response.body)
    })

    // axios.post('http://www.easy-mock.com/mock/5996a438059b9c566dc6de34/example/article/list')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  }
}
</script>

<style lang="less">
#app {
  font-family: Microsoft Yahei, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
