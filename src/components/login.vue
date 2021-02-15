<template>
	<div class="login">
    <div class="mainLoginWrapper">

            <div class="loginWrapper" v-if="Islogin">
                <div class="loginTitle">
                  <h1>Login</h1>
                </div>
                <div class="usernameInput"> 
                  <h3>Username</h3>
                  <input v-model="username" type="text">
                </div>
                <div class="passwordInput">
                  <h3>Password</h3>
                  <input v-model="password" type="password">
                </div>
                <div class="signIn-btn">
                  <button @click="SignIn">Se connecter</button>
                </div>
                <div class="footer">Pas encore inscrit ? | <a href="#" @click="SwitchTo">S'inscrire</a></div>
            </div>

            <div class="loginWrapper" v-else>
                <div class="loginTitle">
                  <h1>Sign Up</h1>
                </div>
                <div class="usernameInput"> 
                  <h3>Username</h3>
                  <input v-model="username" type="text">
                </div>
                <div class="passwordInput">
                  <h3>Password</h3>
                  <input v-model="password" type="password">
                </div>
                <div class="signIn-btn">
                  <button @click="SignUp">S'inscrire</button>
                </div>
                <div class="footer">Déjà inscrit ? | <a href="#" @click="SwitchTo">Se connecter</a></div>
            </div>
    </div>
	</div>
</template>

<script>

const axios = require('axios');
const apiLoginURL = 'http://163.172.182.29:8080/';

export default {
  name: "Login",
  components: {},
  created : async function () {
          await axios.post(
              apiLoginURL+"auth/oauth/check_token?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTM0MDU2NjQsInVzZXJfbmFtZSI6InRlc3QxIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImE0YzU0MmM3LWQ0NDctNGEzMS05MjU4LWM4YzhjZmM5YjI5NiIsImNsaWVudF9pZCI6IndlYnNlcnZpY2VhdXRoIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.bTfKPACsj3_Q08EVtn-Vs9BC1cxWW_aWSQEFN3cri2wrSXaivcQRxLiI6OX86E8CCKC0bJ3EbS29wHQVhBU6Tbp3SXFTiSECOEKGkb4Vb184rYdcGbUNuGF8bv_E1x33jHtiL_wRCmjCnpq_1mRPh5XRi44YCKHZJnEoM1vx7VrrJWY-gI-Hkiqe1t54cMGSzKjLumrDiS-ooFeibfl0QK9tQj6ipd_h1dR7r46nvJ6-yvpjxKIvbztB8VuncVTT815QQnLq5NOUEkh4qFjAHhoBsdTYfwb9SfqF38KT23KxC3f5eTTFLLZSCQDwbbn897Zf5i6W5UMn0Olj2d2sAg",
              {
                headers: {
                  "Authorization" : "Basic d2Vic2VydmljZWF1dGg6YXV0aGVudGljYXRvcg==",
                  "Content-Type" : "application/x-www-form-urlencoded",
                  "Access-Control-Allow-Origin" : "*",
                }
              }
          )
          .then(function (response) {
            console.log(response)
            if(response.status == 200){            
              this.$router.push({
                name: 'Home',
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          })

    //this.checkToken()
  },
  data() {
    return {
      Islogin: true,
      username :"",
      password :"",
    };
  },
    methods: {
      SwitchTo : async function (){
        this.Islogin = !this.Islogin;
      },

      // A finir
      SignIn : async function (){           
            this.$router.push({
              name: 'Home',
            })
          /*await axios.post(
              apiLoginURL+"auth/oauth/token",
              {
                grant_type: "password",
                username: this.username,
                password: this.password,
              },
              {
                headers: {
                  "Authorization" : "Basic d2Vic2VydmljZWF1dGg6YXV0aGVudGljYXRvcg==",
                  "Content-Type" : "application/x-www-form-urlencoded",
                }
              }
          )
          .then(function (response) {
            console.log(response);                
            this.$router.push({
              name: 'Home',
            })
          })
          .catch(function (error) {
            console.log(error);
          })*/
      },
      SignUp : async function (){           
            this.$router.push({
              name: 'Home',
            })
          /*await axios.post(
              apiLoginURL+"auth/users/register",
              {
                username: this.username,
                password: this.password,
              },
          )
          .then(function (response) {
            console.log(response);                
            this.$router.push({
              name: 'Home',
            })
          })
          .catch(function (error) {
            console.log(error);
          })
        
      },
      checkToken : async function() {
          await axios.post(
              apiLoginURL+"auth/oauth/check_token",
              {
                token: this.authToken,
              },
              {
                headers: {
                  "Authorization" : "Basic d2Vic2VydmljZWF1dGg6YXV0aGVudGljYXRvcg==",
                  "Content-Type" : "application/x-www-form-urlencoded",
                }
              }
          )
          .then(function (response) {
            if(response.status == 200){            
              this.$router.push({
                name: 'Home',
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          })*/
      }        
    },
};

</script>
<style scoped>
  .mainLoginWrapper{
      margin-top: 12rem;
      display: grid;
      grid-template-columns: 35% 30% 35%;
  }
  .loginWrapper {
      display: grid;
      grid-column: 2 / 2;
      grid-template-columns: 15% 70% 15%;
      grid-template-rows: 25% 20% 20% auto;
      margin-top: 0.6rem;
      padding: 0.6rem;
      border-radius: 10px;
      color: #dadada;
      background-color: #3f5873;
      height: 40vh;
  }
  .loginTitle{
      grid-column: 2 / 2;
      grid-row: 1 / 1;
      justify-self: center;
      align-self: center;
      user-select: none;
      cursor: default;
  }
  .usernameInput{
      grid-column: 2 / 2;
      grid-row: 2 / 2;
      justify-self: center;
      align-self: center;
  }
  .usernameInput > h3 {
      user-select: none;
      cursor: default;
  }
  .passwordInput{
      display: inline-block;
      grid-column: 2 / 2;
      grid-row: 3 / 3;
      justify-self: center;
      align-self: center;
  }
  .passwordInput > h3 {
      user-select: none;
      cursor: default;
  }
  .footer{
      grid-column: 2 / 2;
      grid-row: 4 / 4;
      align-self: end;
      justify-self: center;
  }
  .signIn-btn{
      grid-column: 2 / 2;
      grid-row: 4 / 4;
      align-self: start;
      justify-self: center;
  }
  .signIn-btn > button{    
    border-radius: 7px;
    border: solid 1px transparent;
    padding: 0.5rem;
    user-select: none;
    font-weight: bold;
    background-color: #dadada;
  }
  input{    
      border-radius: 7px;
  }
</style>
