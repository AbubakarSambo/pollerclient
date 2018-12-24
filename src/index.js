import dva from "dva";
import createLoading from "dva-loading";
import createBrowserHistory from 'history/createBrowserHistory'
import { createLogger } from "redux-logger";
import RouterConfig from './router'


const registerModel = (app, model) => {
  if (
    !(app._models.filter(m => m.namespace === model.namespace).length === 1)
  ) {
    app.model(model);
  }
};

// Redux Logger Starter for DEV ENV
function startLogger() {
    return createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error
    });
}

// 1. Initialize
const app = dva({
  ...createLoading({ effects: true }),
  params: 'window.location',
  history: createBrowserHistory()
});

// 2. Plugins


// 3. Model
app.model(require("./models/app").default);

// 4. Router
app.router(RouterConfig);
// 5. Start
app.start('#root');
