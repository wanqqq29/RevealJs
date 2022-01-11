/*
 * @Author: wanqqq29
 * @Date: 2022-01-04 20:07:03
 * @LastEditTime: 2022-01-11 14:46:42
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\router\routes.js
 */

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/test.vue') }
    ]
  },
  {
    path: '/marp',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/marp-core.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
