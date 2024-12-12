import ActionTypes from './ActionTypes';

const getDashboardData = payload => {
  return {
    type: ActionTypes.DATA,
    payload,
  };
};

const updateSection = payload => {
  return {
    type: ActionTypes.SECTION_UPDATE,
    payload,
  };
};

export {getDashboardData, updateSection};
