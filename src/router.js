import { createWebHistory, createRouter } from "vue-router";
import homeroutes from "./pages/homemodule/homeroutes";


const routes = [
   ...homeroutes
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;