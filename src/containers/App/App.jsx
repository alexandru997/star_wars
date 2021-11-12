import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header";

import routesConfig from "../../routes/routesConfig";

import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
