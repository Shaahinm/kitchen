<template>
  <md-layout md-align="center" md-gutter="16">   
  <BlockUI v-if="isLoading" :html="html" message="لطفآ منتظر بمانید..."></BlockUI>      
  <md-layout md-flex="20" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center  ">
      <h1>ورود به حساب کاربری</h1>
    <form novalidate @submit.stop.prevent="submit">
        <md-input-container md-clearable dir="ltr">
            <md-icon>email</md-icon>
            <label>ایمیل</label>
            <md-input required v-model="email" type="email" :class="{'md-input-invalid': 'emailValid'}"></md-input>
            <!-- <md-tooltip>لطفآ ایمیل خود را وارد نمایید</md-tooltip> -->
            <span class="md-error">{{invalidEmailMessage}}</span>
        </md-input-container>
        <md-input-container md-has-password dir="ltr">
            <md-icon>security</md-icon>
            <label>کلمه عبور</label>
            <md-input required @keyup.enter.native="login()" v-model="password" type="password" :class="{'md-input-invalid': 'passwordValid'}"></md-input>
            <!-- <md-tooltip>لطفآ کلمه عبور خود را وارد نمایید</md-tooltip>             -->
            <span class="md-error">{{invalidPasswordMessage}}</span>
        </md-input-container>
        <md-checkbox id="rememberMe" name="rememberMe" v-model="rememberMe" class="md-primary">مرا به خاطر بسپار</md-checkbox>        
        <md-layout md-gutter>
             <md-layout md-flex="100">
                <md-button :disabled="(!emailValid || !passwordValid)" class="md-raised md-primary" @click="login()">ورود</md-button>
            </md-layout>  
            <md-layout md-align="center" md-flex="100">
                <md-button class="md-primary" href="#/authentication/register">قبلا ثبت نام نکرده اید؟ ثبت نام کنید</md-button>
            </md-layout>            
        </md-layout>                        
    </form>
    <button @click="test()">Shaahin</button>
  </md-layout>  
</md-layout>
</template>
<script>
import { HttpCall } from "./../../utils/axios-config";
import { auth } from "./../../utils/auth";
// import Snackbar from './../snackbar'
export default {
  data() {
    return {
      email: "",
      emailValid: false,
      invalidEmailMessage: "",
      rememberMe: false,
      password: "",
      passwordValid: false,
      invalidPasswordMessage: "",
      isLoading: false,
      html: '<img src="static/puff.svg" />'
    };
  },
  methods: {
    login() {
      const apiCall = new HttpCall();
      const payload = {
        email: this.email,
        password: this.password
      };

      this.isLoading = true;
      let options = {
        action: {
          text: "بستن",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
        position: "bottom-center",
        duration: 4000,
        theme: "primary",
        fullWidth: true,
        fitToScreen: true
      };
      var context = apiCall.getContext(
        success => {
          localStorage.setItem("token", success.data.token);
          localStorage.setItem("exp", success.data.expiration);
          var token = new auth();
          this.isLoading = false;

          let myToast = this.$toasted
            .show(`خوش آمدید ${token.getUserName()} .`, options)
            .goAway(5000);
          this.$router.push("/");
        },
        error => {
          let myToast = this.$toasted
            .error(`${error} .`, options)
            .goAway(5000);
          this.isLoading = false;
        }
      );
      apiCall.post("authentication/token", payload, context);
    }  
  },  
  watch: {
    email: function() {
      var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      this.emailValid = emailRegex.test(this.email);
      if (this.emailValid) {
        this.invalidEmailMessage = "";
      } else {
        this.invalidEmailMessage = "لطفآ ایمیل معتبر استفاده نمایید";
      }
    },
    password: function() {
      if (this.password.length > 7) {
        this.passwordValid = true;
        this.invalidPasswordMessage = "";
      } else {
        this.passwordValid = false;
        this.invalidPasswordMessage = "کلمه عبور باید حداقل ۸ کاراکتر باشد";
      }
    }
  },
  beforeCreate() {
    var authentication = new auth();
    if (authentication.isLoggedIn()) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
form {
  width: 98%;
  height: 400px;
}
.md-input-container {
  margin-top: 20px;
}
.md-checkbox-label {
  margin-right: 8px !important;
}

.md-input-container .md-error {
  opacity: 1;
  color: red;
}
</style>

