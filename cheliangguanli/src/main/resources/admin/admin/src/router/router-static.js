import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import baoyangdengji from '@/views/modules/baoyangdengji/list'
    import cheliang from '@/views/modules/cheliang/list'
    import dictionary from '@/views/modules/dictionary/list'
    import shigudengji from '@/views/modules/shigudengji/list'
    import weixiudengji from '@/views/modules/weixiudengji/list'
    import weizhangdengji from '@/views/modules/weizhangdengji/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import dictionaryBaoyangdengji from '@/views/modules/dictionaryBaoyangdengji/list'
    import dictionaryCheliang from '@/views/modules/dictionaryCheliang/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShigudengji from '@/views/modules/dictionaryShigudengji/list'
    import dictionaryWeixiudengji from '@/views/modules/dictionaryWeixiudengji/list'
    import dictionaryWeizhangdengji from '@/views/modules/dictionaryWeizhangdengji/list'
    import dictionaryZeren from '@/views/modules/dictionaryZeren/list'
    import dictionaryZhunjia from '@/views/modules/dictionaryZhunjia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBaoyangdengji',
        name: '保养类型',
        component: dictionaryBaoyangdengji
    }
    ,{
        path: '/dictionaryCheliang',
        name: '车辆类型',
        component: dictionaryCheliang
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShigudengji',
        name: '事故类型',
        component: dictionaryShigudengji
    }
    ,{
        path: '/dictionaryWeixiudengji',
        name: '维修类型',
        component: dictionaryWeixiudengji
    }
    ,{
        path: '/dictionaryWeizhangdengji',
        name: '违章类型',
        component: dictionaryWeizhangdengji
    }
    ,{
        path: '/dictionaryZeren',
        name: '责任方',
        component: dictionaryZeren
    }
    ,{
        path: '/dictionaryZhunjia',
        name: '准驾车型',
        component: dictionaryZhunjia
    }


    ,{
        path: '/baoyangdengji',
        name: '保养登记',
        component: baoyangdengji
      }
    ,{
        path: '/cheliang',
        name: '车辆',
        component: cheliang
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/shigudengji',
        name: '事故登记',
        component: shigudengji
      }
    ,{
        path: '/weixiudengji',
        name: '维修登记',
        component: weixiudengji
      }
    ,{
        path: '/weizhangdengji',
        name: '违章登记',
        component: weizhangdengji
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
