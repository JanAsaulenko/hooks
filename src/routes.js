import React from "react";
import { Route, Switch } from "react-router-dom";
import Article from "./pages/article";
import GlobalFeed from "./pages/globalFeed";
import Authentication from "./pages/authentication";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={GlobalFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/signup" component={Authentication} />
      <Route path="/article/:slug" component={Article} />
    </Switch>
  );
};
