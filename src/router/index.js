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
import VideoLesson from "@/views/portal/Video-lesson.vue";
import TestLesson from "@/views/portal/Test-lesson.vue";
import BigCatalog from "@/views/portal/Big-catalog.vue";
import AdminMain from "@/views/administrator/Admin-main.vue";
import AdminProfile from "@/views/administrator/Admin-profile.vue";
import AdminCatalogPublish from "@/views/administrator/Admin-catalog-publish.vue";
import NewCurs from "@/views/administrator/New-curs.vue";
import NewLesson from "@/views/administrator/New-lesson.vue";
import NewLessonEnd from "@/views/administrator/New-lesson-end.vue";
import NewTest from "@/views/administrator/New-test.vue";
import NewQuestion from "@/views/administrator/New-question.vue";
import Import from "@/views/administrator/Import.vue";
import UserInfo from "@/views/administrator/User-info.vue";
import AuthorInfo from "@/views/administrator/Author-info.vue";
import CompanySettings from "@/views/administrator/Company-settings.vue";
import Reports from "@/views/administrator/Reports.vue";
import PlaningBriefing from "@/views/administrator/Planing-briefing.vue";
import ImportHistory from "@/views/administrator/Import-history.vue";
import AdminUsersInfo from "@/views/administrator/Admin-users-info.vue";
import AdminsInfo from "@/views/administrator/Admins-info.vue";
import Planing from "@/views/administrator/Planing.vue";
import FishingAttacks from "@/views/administrator/Fishing-attacks.vue";
import AdminCatalog from "@/views/administrator/Admin-catalog.vue";

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
    {
        path: "/video-lesson",
        name: "video-lesson",
        component: VideoLesson,
    },
    {
        path: "/test-lesson",
        name: "test-lesson",
        component: TestLesson,
    },
    {
        path: "/big-catalog",
        name: "big-catalog",
        component: BigCatalog,
    },
    {
        path: "/admin-main",
        name: "admin-main",
        component: AdminMain,
    },
    {
        path: "/admin-profile",
        name: "admin-profile",
        component: AdminProfile,
    },
    {
        path: "/admin-catalog-publish",
        name: "admin-catalog-publish",
        component: AdminCatalogPublish,
    },
    {
        path: "/new-curs",
        name: "new-curs",
        component: NewCurs,
    },
    {
        path: "/new-lesson",
        name: "new-lesson",
        component: NewLesson,
    },
    {
        path: "/new-lesson-end",
        name: "new-lesson-end",
        component: NewLessonEnd,
    },
    {
        path: "/new-test",
        name: "new-test",
        component: NewTest,
    },
    {
        path: "/new-question",
        name: "new-question",
        component: NewQuestion,
    },
    {
        path: "/import",
        name: "import",
        component: Import,
    },
    {
        path: "/user-info",
        name: "user-info",
        component: UserInfo,
    },
    {
        path: "/author-info",
        name: "author-info",
        component: AuthorInfo,
    },
    {
        path: "/company-settings",
        name: "company-settings",
        component: CompanySettings,
    },
    {
        path: "/reports",
        name: "reports",
        component: Reports,
    },
    {
        path: "/planing-briefing",
        name: "planing-briefing",
        component:  PlaningBriefing,
    },
    {
        path: "/import-history",
        name: "import-history",
        component:  ImportHistory,
    },
    {
        path: "/admin-users-info",
        name: "admin-users-info",
        component:  AdminUsersInfo,
    },
    {
        path: "/admins-info",
        name: "admins-info",
        component:  AdminsInfo,
    },
    {
        path: "/planing",
        name: "planing",
        component: Planing,
    },
    {
        path: "/fishing-attacks",
        name: "fishing-attacks",
        component: FishingAttacks,
    },    
    {
        path: "/admin-catalog",
        name: "admin-catalog",
        component:  AdminCatalog,
    },    
   
];

const router = createRouter({
    history: createWebHistory('/Sinapsys/'),
    routes,
});

export default router;