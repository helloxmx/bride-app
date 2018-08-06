import Vue from 'vue'
import Router from 'vue-router'
import LinkNav from '@/views/linkNav'//主页入口

import infoDetails from '@/views/information/details.vue';// 资讯详情
import invitation from '@/views/invitation/newRegister.vue';//邀请函
import brideDiary from '@/views/brideDiary/index.vue';//邀请函

Vue.use(Router);

let router = [
    {
        path: '/',
        name: 'LinkNav',
        component: LinkNav
    },
    {
        path: '/infoDetails',
        name: 'infoDetails',
        component: infoDetails,
        meta: {
            title: '资讯-详情'
        }
    },
    {
        path: '/invitation',
        name: 'invitation',
        component: invitation,
        meta: {
            title: '新娘Go邀请函'
        }
    },
    {
        path: '/brideDiary',
        name: 'brideDiary',
        component: brideDiary,
        meta: {
            title: '新娘日记'
        }
    }

];
let routerMain = new Router({
    routes: router
});

routerMain.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }

    // let allowBack = true //    给个默认值true

    // if (to.meta.allowBack !== undefined) {
    //     allowBack = to.meta.allowBack
    // }

    // if (!allowBack) {
    //     history.pushState(null, null, location.href)
    // }
    next()
})
// routerMain.afterEach(route => {
//     // 从路由的元信息中获取 title 属性
//     if (route.meta.title) {
//         document.title = route.meta.title;
//         // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
//         if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
//             const hackIframe = document.createElement('iframe');

//             hackIframe.style.display = 'none';
//             hackIframe.src = '/static/html/fixIosTitle.html?r=' + Math.random();
//             document.body.appendChild(hackIframe);
//             setTimeout(_ => {
//                 document.body.removeChild(hackIframe)
//             }, 300)
//         }
//     }
// });
export default routerMain;
