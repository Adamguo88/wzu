import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About/About"),
  },
  {
    path: "/river",
    name: "river",
    component: () => import("../views/River/River"),
  },
  {
    path: "/sustainable",
    name: "sustainable",
    component: () => import("../views/Sustainable/Sustainable"),
  },
  {
    path: "/downloadpage/:data",
    name: "downloadpage",
    component: () => import("../views/DownloadPage/DownloadPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
