import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import Login from '@/views/login/Login'
import Article from '@/views/article/Article'
import Category from '@/views/category/Category'
import AdminIndex from '@/views/admin/AdminIndex'

Vue.use(Router)

export default new Router({
	/*mode: 'history',*/
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'AdminIndex',
      component: AdminIndex
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/category/:category/:name',
      name: 'Category',
      component: Category
    }
  ],
  scrollBehavior(to, from, savedPosition) {
      if(savedPosition) {
          return savedPosition
      } else {
          return {
              x: 0,
              y: 0
          }
      }
    }
})
