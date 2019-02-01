import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
// import app from '../store/modules/app';
import user from '../store/modules/user'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [

  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: user.Child,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '新增计划', icon: 'form' }
  //     }
  //   ],
  //   hidden: user.Child
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'userinfo',
  //       name: 'Form',
  //       component: () => import('@/views/form/userinfo'),
  //       meta: { title: '个人信息设置', icon: 'form' }
  //     }
  //   ],
  //   hidden: user.Child
  // },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    hidden: user.Child,
    meta: {
      title: '用户卡片',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '新建卡片' }// ,

      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '卡片列表' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/instrumentpanel/index'),
        meta: { title: '仪表盘', icon: 'form' }
      }
    ],
    hidden: user.Child
  },
  {
    path: '/iteration',
    component: Layout,
	meta: {
      title: '用户卡片',
      icon: 'nested'
    },
    children: [
      {
        path: 'addplan',
        name: 'Form',
        component: () => import('@/views/iteration/addplan/index'),
        meta: { title: '添加计划', icon: 'form' }
      },
	  {
        path: 'viewplan',
        name: 'Form',
        component: () => import('@/views/iteration/viewplan/index'),
        meta: { title: '查询计划', icon: 'form' }
      }
    ],
    hidden: user.Child
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/projectconf',
    name: 'home',
    hidden: user.Child,
    meta: {
      title: '产品项目',
      icon: 'nested'
    },
    children: [
      {
        path: '/projectconf',
        component: () => import('@/views/projectconf/index'),
        name: 'projectconf',
        meta: {
          title: '项目设置'
        }
      },
      {
        path: '/individualwork',
        component: () => import('@/views/individualwork/index'),
        name: 'individualwork',
        meta: { title: '个人工作台' }
      }
    ]

  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
