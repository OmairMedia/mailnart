import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home"),

  },
  {
    path: "/shipping/step-1",
    component: () => import(/* webpackChunkName: "home" */ "./views/shipping_form_step_1.vue"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: "/shipping/step-2",
    component: () => import(/* webpackChunkName: "home" */ "./views/shipping_form_step_2.vue"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: "/shipping/step-3",
    component: () => import(/* webpackChunkName: "home" */ "./views/shipping_form_step_3.vue"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: "/shipping/step-4",
    component: () => import(/* webpackChunkName: "home" */ "./views/shipping_form_step_4.vue"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: "/shipping/step-5",
    component: () => import(/* webpackChunkName: "home" */ "./views/shipping_form_step_5.vue"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/piaf`,
    meta: { loginRequired: true },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */
    children: [
      {
        path: "dashboard",
        component: () =>
          import(/* webpackChunkName: "piaf" */ "./views/app/dashboard"),
        redirect: `${adminRoot}/dashboard/account`,
        children: [
          {
            path: 'account',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/dashboard/Account')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'orders',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/dashboard/Orders')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }
        ]
      },
      {
        path: "second-menu",
        component: () =>
          import(/* webpackChunkName: "second-menu" */ "./views/app/second-menu"),
        redirect: `${adminRoot}/second-menu/second`,
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "piaf" */ './views/app/second-menu/Second') }
        ]
      },


      {
        path: "single",
        component: () =>
          import(/* webpackChunkName: "single" */ "./views/app/single")
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      },

    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});
router.beforeEach(AuthGuard);
export default router;
