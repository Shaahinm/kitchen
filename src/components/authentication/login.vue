<template>
  <section class="section">
    <BlockUI v-if="isLoading" :html="html" message="لطفآ منتظر بمانید..."></BlockUI>      
    <div class="columns">  
      <div class="column">
        <div class="box">
          <h1>ورود به حساب کاربری</h1>
            <div class="field" dir="ltr">
              <label class="label" dir="rtl">ایمیل</label>
              <div class="control has-icons-left has-icons-right">
                <input v-model="email" class="input" :class="{'is-danger': !emailValid}" type="email" placeholder="ایمیل خود را وارد نمایید">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>              
                <span v-if="!emailValid" class="icon is-small is-right">
                  <i class="fa fa-warning"></i>
                </span>
              </div>
              <p dir="rtl" class="help my-height is-danger">{{invalidEmailMessage}}</p>
            </div>
            <div class="field" dir="ltr">
              <label class="label" dir="rtl">کلمه عبور</label>
              <div class="control has-icons-left has-icons-right">
                <input @keyup.enter="login()" v-model="password" :class="{'is-danger': !passwordValid}" class="input" type="password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="!passwordValid" class="icon is-small is-right">
                  <i class="fa fa-warning"></i>
                </span>
              </div>
              <p dir="rtl" class="help my-height is-danger">{{invalidPasswordMessage}}</p>
            </div>
            <div class="field" dir="rtl">
              <div class="control my-checkbox">
                <label class="checkbox">
                  <input type="checkbox">
                  مرا بخاطر بسپار
                </label>
              </div>
            </div>
            <div class="field is-grouped">
            <div class="control">
              <button v-bind:disabled="(!emailValid || !passwordValid)" @click="login()" class="button is-link">ورود</button>
            </div>
            <div class="control">
              <router-link class="button is-white" to="register">قبلا ثبت نام نکرده اید؟ ثبت نام کنید</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      invalidEmailMessage: " ",
      rememberMe: false,
      password: "",
      passwordValid: false,
      invalidPasswordMessage: " ",
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
          let myToast = this.$toasted.error(`${error} .`, options).goAway(5000);
          this.isLoading = false;
        }
      );
      apiCall.authentication("authentication/token", payload, context);
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

<style lang="scss" scoped>
.column {
  align-content: center;
  // text-align: center;
  max-width: 400px;
  margin: 0 auto;
}
.columns .field {
  margin-top: 24px;
}
.my-height{
  min-height: 18px;
}

.my-checkbox {
  text-align: right;  
  direction: rtl;
}
</style>

