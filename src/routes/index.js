import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/components/Upload";
import { HeaderOnly } from "~/layouts";

//public routes - not authentic
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

// prvate routes need authentic
const privateRoutes = [];

export { publicRoutes, privateRoutes };
