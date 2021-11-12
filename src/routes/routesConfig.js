import HomePage from "../containers/App/HomePage/HomePage";
import PeoplePage from "../components/peoplePage/PeoplePage";
import NotFound from "../containers/NotFoundPage/NotFound";
const routesConfig = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/people",
    exact: true,
    component: PeoplePage,
  },
  {
    path: "*",
    exact: false,
    component: NotFound,
  },
];

export default routesConfig;
