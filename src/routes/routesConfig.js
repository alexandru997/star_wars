import HomePage from "../containers/App/HomePage/HomePage";
import PeoplePage from "../components/peoplePage/PeoplePage";
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
];

export default routesConfig;
