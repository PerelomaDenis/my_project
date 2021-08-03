import './App.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./routes/routes";
import Sidebar from "./components/Sidebar";
import "./assets/fonts/fonts.css";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Switch>
            {routes.map((route) => (
              <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
              />
            ))}
          </Switch>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
