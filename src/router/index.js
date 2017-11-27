import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie'
import MovieMain from '@/components/moviemain'
import Zoom from '@/components/zoom'
import Login from '@/public/login/login'
import Cinema from '@/public/cinema/cinema'
import xiangqing from '@/public/xiangqing/xiangqing'
import moviepro from '@/public/xiangqing/moviepro'

Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/moviemain',
      name: 'moviemain',
      component: MovieMain
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cinema/:movie_id',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/xiangqing/:movie_id',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/moviepro',
      name: 'moviepro',
      component: moviepro
    },
    {
      path: '/zoom',
      name: 'zoom',
      component: Zoom,
      meta: {
        isLogin: true
      }
    }
  ]
})

newRouter.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (to.meta.isLogin && !userInfo) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})

export default newRouter
