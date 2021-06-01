import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Sig from '../views/Sig.vue'
import Question from '../views/Question.vue'
import Petersbourg from '../views/Petersbourg.vue'
import Ressources from '../views/Ressources.vue'
import Apropos from '../views/Apropos.vue'


const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/sig',
    name: 'Sig',
    component: Sig
  },
  {
    path: '/question-orient',
    name: 'Question',
    component: Question
  },
  {
    path: '/saint-petersbourg',
    name: 'Petersbourg',
    component: Petersbourg
  },
  {
    path: '/ressources',
    name: 'Ressources',
    component: Ressources
  },
  {
    path: '/a-propos',
    name: 'Apropos',
    component: Apropos
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
