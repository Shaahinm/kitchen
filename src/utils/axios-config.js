import axios from 'axios';
import {
  auth
} from './auth';
import {
  ServerError
} from './config/errorList'
// export const gapi = axios.create({
//     baseURL: `http://localhost:54161/`,
//     headers: {
//       Authorization: 'Bearer {token}'
//     }
// });

// export const api = axios.create({
//     baseURL: `http://localhost:54161/`    
// });

const baseURL = `http://localhost:49716/api`;

export class HttpCall {

  header() {
    var token = new auth();
    if (token.isLoggedIn()) {
      return {
        headers: {
          Authorization: `Bearer ${token.token()}`
        }
      };
    }
    return null;
  }

  get(endpoint, context) {
    axios.get(`${baseURL}/${endpoint}`, this.header())
      .then((response) => {
        context.success(response);
      }).catch((response) => {
        context.error(ServerError.getErrorByNumber(response.response.status));
      });
  }

  get(endpoint, params, context) {
    axios.get(`${baseURL}/${endpoint}`, {
        params: params
      }, this.header())
      .then((response) => {
        context.success(response);
      }).catch((response) => {
        context.error(ServerError.getErrorByNumber(response.response.status));
      });
  }

  post(endpoint, params, context) {
    axios.post(`${baseURL}/${endpoint}`, params, this.header())
      .then((response) => {
        context.success(response);
      }).catch((response) => {
        context.error(ServerError.getErrorByNumber(response.response.status));
      });
  }

  test(endpoint, params, context) {

    axios.post(`${baseURL}/${endpoint}`, params, this.header())
      .then((response) => {
        context.success(response);
      }).catch((response) => {
        context.error(ServerError.getErrorByNumber(response.response.status));
      });
  }

  getContext(a, b) {
    return {
      success: a,
      error: b
    }
  }


  call() {
    return axios.create({
      baseURL: this.url
    });
  }
}
