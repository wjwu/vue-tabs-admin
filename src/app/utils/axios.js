import axios from 'axios';
import session from '../../common/js/session';

axios.interceptors.request.use(cf => {
  cf.headers['Authorization'] = session.getString('token') || '';
  cf.baseURL = window.config.apiHost;
  return cf;
});

axios.postForm = (url, data, config) => {
  return axios.post(url, data, {
    ...config,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [
      data => {
        let ret = '';
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        return ret;
      }
    ]
  });
};

export default axios;
