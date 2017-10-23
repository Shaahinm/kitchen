import jwt_decode from "jwt-decode";

export class auth {

  tokenExists() {
    if (localStorage.getItem('token') === null) {
      return false;
    }
    return true;
  }

  token() {
    return localStorage.getItem('token');
  }

  getUserName() {
    if(this.tokenExists()) {
      var token = this.decode();
      return token.firstname + ' ' + token.lastname;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('exp');    
  }

  tokenHasExpired(unixTime) {
    const now = Date.now();    
    if ((unixTime * 1000) > now) {
      return false;
    }

    return true;
  }

  decode() {
    return jwt_decode(this.token());
  }

  isLoggedIn() {
    if (this.tokenExists()) {
      var token = this.decode();      
      if (!this.tokenHasExpired(token.exp)) {        
        return true;
      }
    }    
    return false;
  }
}

// var token = localStorage.getItem('token');


// var decoded = jwt_decode(token);
// console.log(decoded);
