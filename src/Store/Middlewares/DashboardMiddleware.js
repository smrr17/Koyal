import Axios from 'axios';
import {hideLoading, showLoading, showAlert} from '../Actions/GeneralActions';
import {
  getDashboardData,
  getServices,
  updateSection,
} from '../Actions/DashboardAction';
import APIS from '../../Apis';

export const DashboardMiddleware = {
  getHomeData: (page = 1, limit = 1) => {
    console.log('page--->', page);
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await Axios.get(APIS.content(page, limit));
          // console.log('res--->', JSON.stringify(data.data.response, null, 2));
          if (data?.status == 200) {
            resolve(true);
            if (page >= 2) {
              dispatch(updateSection(data?.data?.response));
            } else {
              dispatch(getDashboardData(data?.data?.response));
            }
          }
        } catch (error) {
          reject(error);
        }
      });
    };
  },
};
