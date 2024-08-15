import { createRouter, createWebHistory } from 'vue-router'
import AgendamentoView from '@/views/AgendamentoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'agendamento',
      component: AgendamentoView
    }
  ]
})

export default router
