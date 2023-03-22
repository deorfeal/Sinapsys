import {
    createWebHistory,
    createRouter
} from "vue-router";
import Entrance from "@/views/Entrance.vue";
import Reg from "@/views/Reg.vue";
import Recovery from "@/views/Recovery.vue";
import EndRecovery from "@/views/End-recovery.vue";
import RegTwo from "@/views/Reg-two.vue";
import Fishing from "@/views/portal/Fishing.vue";
import EvaluationThanks from "@/views/portal/Evaluation-thanks.vue";
import CursEvaluation from "@/views/portal/Curs-evaluation.vue";
import TestResults from "@/views/portal/Test-results.vue";
import Test from "@/views/portal/Test.vue";
import Recall from "@/views/portal/Recall.vue";
import Questions from "@/views/portal/Questions.vue";
import Main from "@/views/portal/Main.vue";
import Catalog from "@/views/portal/Catalog.vue";
import CursPreview from "@/views/portal/Curs-preview.vue";
import Profile from "@/views/portal/Profile.vue";
import Settings from "@/views/portal/Settings.vue";
import ErrorPage from "@/views/portal/Error-page.vue";
import MyCourses from "@/views/portal/My-courses.vue";

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
    {
        path: "/fishing",
        name: "fishing",
        component: Fishing,
    },
    {
        path: "/evaluation-thanks",
        name: "evaluation-thanks",
        component: EvaluationThanks,
    },
    {
        path: "/curs-evaluation",
        name: "curs-evaluation",
        component: CursEvaluation,
    },
    {
        path: "/test-results",
        name: "test-results",
        component: TestResults,
    },
    {
        path: "/test",
        name: "test",
        component: Test,
    },
    {
        path: "/recall",
        name: "recall",
        component: Recall,
    },
    {
        path: "/questions",
        name: "questions",
        component: Questions,
    },
    {
        path: "/main",
        name: "main",
        component: Main,
    },
    {
        path: "/catalog",
        name: "catalog",
        component: Catalog,
    },
    {
        path: "/curs-preview",
        name: "curs-preview",
        component: CursPreview,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },
    {
        path: "/settings",
        name: "settings",
        component: Settings,
    },
    {
        path: "/Error-page",
        name: "Error-page",
        component: ErrorPage,
    },
    {
        path: "/my-courses",
        name: "my-courses",
        component: MyCourses,
    },

];

const router = createRouter({
    history: createWebHistory('/Sinapsys/'),
    routes,
});

export default router;