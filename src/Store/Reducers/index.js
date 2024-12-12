import {combineReducers} from 'redux';
import DashboardReducer from './DashboardReducer';

const AppReducers = combineReducers({
  DashboardReducer,
});

const Reducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return AppReducers(undefined, action);
  }
  return AppReducers(state, action);
};

export default Reducer;
