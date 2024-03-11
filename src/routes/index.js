// Layout
import { HeaderOnly } from "~/components/Layout";



import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

// Public Routes
// Đường dẫn Page đồng bộ
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
];
// Private Routes
// Đường dẫn Page có điều kiện
const privateRoutes = [

];

export { publicRoutes, privateRoutes };
