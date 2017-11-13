import axios from 'axios';

const settingsUrl = `http://localhost:49716/api/profiles/settings/data`;

export class versionManager {
  static handle(serverVersion) {
    if (this.versionTokenExists()) {
      console.log('handle if true', serverVersion);
      this.checkVersion(serverVersion);
    } else {
      console.log('handle if false', serverVersion);
      this.getServerItems();
    }
  }

  static versionTokenExists() {
    if (localStorage.getItem('client-version') === null) {
      return false;
    }
    return true;
  }

  static getToken() {
    if (this.versionTokenExists()) return localStorage.getItem('client-version');
    return 0;
  }

  // if a token already exists, we check if server version == client version
  // if it is not, we update the cache from server and update the token
  static checkVersion(serverVersion) {
    var clientVersion = this.getToken();    
    if (clientVersion == serverVersion) {
      console.log('check version if', serverVersion);
      return;
    } else {
      console.log('check version else', serverVersion);
      this.getServerItems();
    }
  }

  // we get the cache from server, then create a new token
  static getServerItems() {
    console.log('getServerItems');
    var version = this.getCacheFromServer();
  }

  static getCacheFromServer(observer) {
    axios.get(settingsUrl)
      .then((res) => {
        localStorage.setItem('settings', JSON.stringify(res.data.item));
        localStorage.setItem('client-version', res.data.version);
        if(observer !== undefined) {
            observer();
        }
      }).catch((res) => {
        console.log('there was a problem updating cache, please try again later!')
      })
  }

  static triggerUpdate(caller) {      
      this.getCacheFromServer(caller);      
  }


}
