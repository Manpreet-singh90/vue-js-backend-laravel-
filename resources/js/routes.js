import Home from './components/ExampleComponent'
import About from './components/AboutUs.vue'
import Slot from './components/ParentSlot.vue'
import Props from './components/PropsParent.vue'
import Register from './components/Register.vue'
import UserList from './components/UserListing.vue'
import Login from './components/Login.vue'
import EditUser from './components/EditUser.vue'


const routes = [
    { 
      path: '/', 
      component: Home 
    },
    { 
      path: '/about',
     component: About 
    },
    {
      path: '/slot',
      component: Slot 
    },
    { 
      path: '/props',
      component: Props 
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/editUser',
      name : 'editUser',
      component: EditUser
    }

];

export default routes;