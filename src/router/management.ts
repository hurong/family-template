const Management = () => import(/* webpackChunkName: "management" */ '@/views/Management.vue');
export default [
  {
    path: '/management',
    component: Management,
  }
];