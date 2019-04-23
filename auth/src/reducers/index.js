import { combineReducers } from 'redux';
import { userReducer } from './user';
import { pageReducer } from './page';
import { viewPhotoReducer } from './popup';
import { routerReducer } from 'react-router-redux';


export const rootReducer = combineReducers({
  routing: routerReducer,
  page: pageReducer,
  popup: viewPhotoReducer,
  user: userReducer
});

