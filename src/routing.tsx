import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LazyLoadRoute } from "./LazyLoadRoute";
import { Loader } from "./shared/components/Loader/Loader";

const ROUTES = {
  home: {
    path: "/",
    component: LazyLoadRoute("./HomeView/HomeView")
  },
  notFound:{
    path: "*",
    component: (props) => <h1>Not Found</h1>

  }
};

const Routing = () => {
  const { home,notFound } = ROUTES;
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path={home.path} component={home.component}/>
          <Route path={notFound.path} component={notFound.component}/>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routing;
