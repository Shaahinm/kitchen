import jwt_decode from "jwt-decode";

function tokenExists() {
  if (localStorage.getItem('token') === null) return false;
  return true;
}

function decode() {
  return jwt_decode(token());
}

function token() {
  return localStorage.getItem('token');
}

function tokenHasExpired(unixTime) {
  const now = Date.now();
  if ((unixTime * 1000) > now) return false;
  return true;
}

export default {
  install: (Vue) => {
    Vue.prototype.$auth = {
      tokenExists: () => {
        tokenExists();
      },
      token: () => {
        return localStorage.getItem('token');
      },
      getUserName: () => {
        if (tokenExists()) {
          var token = decode();
          return `${token.firstname} ${token.lastname}`;
        }
      },     
      isLoggedIn: () => {
        if (tokenExists()) {
          var token = decode();
          if (!tokenHasExpired(token.exp)) return true;
        }
        return false;
      },
      logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('exp');
      },
      login: (token, exp) => {
        localStorage.setItem("token", token);
        localStorage.setItem("exp", exp);
      }
    }
  }
};
