import ActionTypes from '../Actions/ActionTypes';

let initialState = {
  homeData: null,
  homePagination: null,
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DATA:
      state = {
        ...state,
        homeData: action.payload,
        homePagination: action.payload,
      };
      break;
    case ActionTypes.SECTION_UPDATE:
      state = {
        ...state,
        homePagination: action.payload,
        homeData: {
          ...state.homeData,
          sections: [...state.homeData.sections, ...action.payload.sections],
        },
      };
      break;

    default:
      break;
  }
  return state;
};

export default DashboardReducer;
