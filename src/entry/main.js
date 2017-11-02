// 引导程序
function bootstrap(App, routes) {

    // 配置路由
    Vue.use(VueRouter)

    // ElementUI
    Vue.use(ElementUI)

    // VueResource
    Vue.use(VueResource)

    // 合并路由配置
    const router = new VueRouter({
        routes
    })

    Vue.http.options.emulateJSON = true

    new Vue({
        el: '#app',
        router,
        render: h => h(App)
    })

}


export default function(App, routes) {
    bootstrap(App, routes)
}
    