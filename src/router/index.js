import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Article from '@/views/Article'
import ArticleList from '@/views/ArticleList'
import FileList from '@/views/FileList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/article/list',
      name: 'article-list',
      component: ArticleList
    },
    {
      path: '/file/list',
      name: 'file-list',
      component: FileList
    }
  ]
})
