import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModel from '@/components/templates/KbnTaskDetailModel.vue'

export default [
  {
    path: '/',
    components: KbnBoardView,
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    components: KbnLoginView
  },
  {
    path: '/tasks/:id',
    components: KbnTaskDetailModel,
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    redirect: '/'
  }
]
