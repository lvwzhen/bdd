import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./view/index.vue"),
    meta: {
      title: "冰墩墩表情生成器",
      keepAlive: true,
      isPublic: true,
    },
  },
];

routes.forEach((route) => {
  route.path = route.path || "/" + (route.name || "");
});

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export { router };
