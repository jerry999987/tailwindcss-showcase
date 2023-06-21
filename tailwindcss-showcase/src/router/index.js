import { createRouter, createWebHashHistory } from "vue-router";
import ShowCase from "@/templates/showcase/index.vue";
import caseRoutes from "./cases";
// const caseRoutes = cases.map((v) =>   ({
//   path: v.path,
//   component: eval(v.component),
// }))

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        component: ShowCase,
      },
      ...caseRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
