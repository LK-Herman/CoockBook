import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import MealDetails from '../components/MealDetails.vue'
import SearchByName from '../components/SearchByName.vue'
import Categories from '../views/Categories.vue'
import UserList from '../views/UserList.vue'

// route guard
import { dbAuth } from '../firebase/config.js'

const requiredAuth = (to, from, next) => {
  let user = dbAuth.currentUser
  if (!user){
    next({name: 'Login'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requiredAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    beforeEnter: requiredAuth
  },
  {
    path: '/favorites',
    name: 'UserList',
    component: UserList,
    beforeEnter: requiredAuth

  },
  {
    path: '/meals/:id',
    name: 'MealDetails',
    component: MealDetails,
    beforeEnter: requiredAuth,
    props: true
  },
  {
    path: '/meals',
    name: 'SearchByName',
    component: SearchByName,
    beforeEnter: requiredAuth,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
