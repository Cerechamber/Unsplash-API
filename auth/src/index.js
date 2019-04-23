import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, hashHistory, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { rootReducer } from './reducers/index';
import App from './containers/app';
import Page from './containers/page';
import Popup from './containers/popup';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);



ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
  <Route component={App} >
  <Route path='/' component={Page} />
  <Route path='popup' component={Popup} />
  </Route>
  </Router>
  </Provider>,
  document.querySelector('#root')
);


/*<Route exact path='/'  render={()=><Page page={page} viewPhoto={viewPhoto} loadPhotos={loadPhotos} />}  />
        <Route exact path='/popup' render={() => <Popup popup={popup} viewPhoto={viewPhoto} loadPhotos={loadPhotos} page={page} />} />*/