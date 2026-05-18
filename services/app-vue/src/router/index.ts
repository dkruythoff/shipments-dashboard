import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { Shipments } from "../views";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/shipments",
    children: [
      {
        path: "shipments",
        component: Shipments,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
