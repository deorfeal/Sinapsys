import {
    createWebHistory,
    createRouter
} from "vue-router";
import Entrance from "@/views/Entrance.vue";
import Reg from "@/views/Reg.vue";
import Recovery from "@/views/Recovery.vue";
import EndRecovery from "@/views/End-recovery.vue";
import RegTwo from "@/views/Reg-two.vue";


const routes = [{
        path: "/",
        name: "Entrance",
        component: Entrance,
    },
    {
        path: "/reg",
        name: "reg",
        component: Reg,
    },
    {
        path: "/recovery",
        name: "recovery",
        component: Recovery,
    },
    {
        path: "/end-recovery",
        name: "end-recovery",
        component: EndRecovery,
    },
    {
        path: "/reg-two",
        name: "reg-two",
        component: RegTwo,
    },

  
];

const router = createRouter({
    history: createWebHistory('/Sinapsys/'),
    routes,
});

export default router;