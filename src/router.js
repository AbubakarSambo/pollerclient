import React from "react";
import App from './routes/app'
import { Route, Switch, routerRedux } from "dva/router";
import Login from "./routes/login";
import { Four04 } from "./routes/404";
import Dashboard from "./routes/dashboard";
import Events from "./routes/events";
import PU from "./routes/pu";
import Agents from "./routes/agents";
import Supervisors from "./routes/supervisors";


const { ConnectedRouter } = routerRedux


const registerModel = (app, model) => {
  if (
    !(app._models.filter(m => m.namespace === model.namespace).length === 1)
  ) {
    app.model(model);
  }
};

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route
            path="/"
            exact
            children={({ match, ...rest }) => {
              registerModel(app, require("./models/authentication").default);
              return <Login />;
            }}
          />
          <Route
            path="/dashboard"
            exact
            render={({ match, ...rest }) => {
              registerModel(app, require("./models/pus").default);
              return <Dashboard match={match} />;
            }}
          />
          <Route
            path="/events"
            exact
            render={({ match, ...rest }) => {
              registerModel(app, require("./models/pus").default);
              return <Events match={match} />;
            }}
          />
          <Route
            path="/pu"
            exact
            render={({ match, ...rest }) => {
              registerModel(app, require("./models/pus").default);
              return <PU match={match} />;
            }}
          />
          <Route
            path="/agents"
            exact
            render={({ match, ...rest }) => {
              registerModel(app, require("./models/official").default);
              return <Agents match={match} />;
            }}
          />
          <Route
            path="/supervisors"
            exact
            render={({ match, ...rest }) => {
              registerModel(app, require("./models/supervisor").default);
              return <Supervisors match={match} />;
            }}
          />
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
