import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Men from "./Components/Men/Men";
import Watch from "./Components/Men/Watches/Watch/Watch";
import Women from "./Components/Women/Women";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/men" component={Men} />
      <Route exact path="/men/:id" component={Watch} />
      <Route exact path="/women" component={Women} />
    </Switch>
  );
};

export default Routes;
