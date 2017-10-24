<template>
  <md-layout md-align="center" md-gutter="16">   
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
      apiCall.post("authentication/register", payload, context);
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
    var authentication = new auth();
    authentication.logout();
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

