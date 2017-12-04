<template>
  <!-- <md-layout md-align="center" md-gutter="16">   
  <BlockUI v-if="isLoading" :html="html" message="لطفآ منتظر بمانید..."></BlockUI>      
  <md-layout md-flex="20" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center  ">
      <h1>ثبت نام</h1>
    <form novalidate @submit.stop.prevent="submit">
        <md-input-container md-clearable dir="ltr">
            <md-icon>email</md-icon>
            <label>ایمیل</label>
            <md-input required v-model="email" type="email" :class="{'md-input-invalid': 'emailValid'}"></md-input>            
            <span class="md-error">{{invalidEmailMessage}}</span>
        </md-input-container>
        <md-input-container md-has-password dir="ltr">
            <md-icon>security</md-icon>
            <label>کلمه عبور</label> 
            <md-input required v-model="password" type="password" :class="{'md-input-invalid': 'passwordValid'}"></md-input>            
            <span class="md-error">{{invalidPasswordMessage}}</span>
        </md-input-container>
        <md-input-container>            
            <label>نام</label>
            <md-input required v-model="firstname" type="text" :class="{'md-input-invalid': 'firstnameValid'}"></md-input>            
            <span class="md-error">{{invalidFirstnameMessage}}</span>
        </md-input-container>
        <md-input-container>            
            <label>نام خانوادگی</label>
            <md-input required @keyup.enter.native="register()" v-model="lastname" type="text" :class="{'md-input-invalid': 'lastnameValid'}"></md-input>            
            <span class="md-error">{{invalidLastnameMessage}}</span>
        </md-input-container>        
        <md-layout md-gutter>
             <md-layout md-flex="100">
                <md-button :disabled="(!emailValid || !passwordValid || !firstnameValid || !lastnameValid)" class="md-raised md-primary" @click="register()">ثبت نام</md-button>
            </md-layout>  
            <md-layout md-align="center" md-flex="100">
                <md-button class="md-primary" href="#/authentication/login">قبلا ثبت نام کرده اید؟ وارد شوید</md-button>
            </md-layout>            
        </md-layout>                        
    </form>    
  </md-layout>  
</md-layout> -->
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
                <input v-model="password" :class="{'is-danger': !passwordValid}" class="input" type="password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="!passwordValid" class="icon is-small is-right">
                  <i class="fa fa-warning"></i>
                </span>
              </div>
              <p dir="rtl" class="help my-height is-danger">{{invalidPasswordMessage}}</p>
            </div>

            <div class="field">
              <label class="label" dir="rtl">نام</label>
              <div class="control has-icons-left has-icons-right">
                <input v-model="firstname" class="input" :class="{'is-danger': !firstnameValid}" type="text" placeholder="نام خود را وارد نمایید">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>              
                <span v-if="!firstnameValid" class="icon is-small is-right">
                  <i class="fa fa-warning"></i>
                </span>
              </div>
              <p dir="rtl" class="help my-height is-danger">{{invalidFirstnameMessage}}</p>
            </div>
            <div class="field">
              <label class="label" dir="rtl">نام خانوادگی</label>
              <div class="control has-icons-left has-icons-right">
                <input @keyup.enter="register()"  v-model="lastname" class="input" :class="{'is-danger': !lastnameValid}" type="text" placeholder="نام خانوادگی خود را وارد نمایید">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>              
                <span v-if="!lastnameValid" class="icon is-small is-right">
                  <i class="fa fa-warning"></i>
                </span>
              </div>
              <p dir="rtl" class="help my-height is-danger">{{invalidLastnameMessage}}</p>
            </div>
            <div class="field is-grouped">
            <div class="control">
              <button v-bind:disabled="(!emailValid || !passwordValid || !firstnameValid || !lastnameValid)" @click="register()" class="button is-link">ثبت نام</button>
            </div>
            <div class="control">
              <router-link class="button is-white" to="login">قبلا ثبت نام کرده اید؟ وارد شوید</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { HttpCall } from "./../../utils/axios-config";
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
      html: '<img src="static/puff.svg" />',
      firstname: "",
      firstnameValid: false,
      invalidFirstnameMessage: "",
      lastname: "",
      lastnameValid: false,
      invalidLastnameMessage: ""
    };
  },
  methods: {
    register() {
      const apiCall = new HttpCall();
      const payload = {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname
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
          this.isLoading = false;
          let myToast = this.$toasted
            .show(`لطفآ با حساب جدید خود وارد شوید`, options)
            .goAway(5000);
          this.$router.push("/authentication/login");
        },
        error => {
          let myToast = this.$toasted.error(`${error} .`, options).goAway(5000);
          this.isLoading = false;
        }
      );
      apiCall.authentication("authentication/register", payload, context);
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
    },
    firstname: function() {
      if (this.firstname.length > 2) {
        this.firstnameValid = true;
        this.invalidFirstnameMessage = "";
      } else {
        this.firstnameValid = false;
        this.invalidFirstnameMessage = "نام اجباری و باید حداقل ۳ کاراکتر باشد";
      }
    },
    lastname: function() {
      if (this.lastname.length > 2) {
        this.lastnameValid = true;
        this.invalidLastnameMessage = "";
      } else {
        this.lastnameValid = false;
        this.invalidLastnameMessage =
          "نام خانوادگی اجباری و باید حداقل ۳ کاراکتر باشد";
      }
    }
  },
  beforeCreate() {
    this.$auth.logout();
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
</style>

