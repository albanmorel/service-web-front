<template>
	<div class="login">
    <div class="mainLoginWrapper">
            <div class="loginWrapper" v-if="Islogin">
                <div class="loginTitle">
                  <h1>Login</h1>
                </div>
                <div class="usernameInput"> 
                  <h3>Username</h3>
                  <input type="text">
                </div>
                <div class="passwordInput">
                  <h3>Password</h3>
                  <input type="text">
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
                  <input type="text">
                </div>
                <div class="passwordInput">
                  <h3>Password</h3>
                  <input type="text">
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
export default {
  name: "Login",
  components: {},
  created : function () {
    this.$bvModal.show("loginModal")
  },
  data() {
    return {
      Islogin: true
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
        /*
        try {
              const response = await axios.get(apiURL+"signIn/")
              this.$router.push({
                name: 'Home',
              })
            } catch (error) {
                console.log(error);
            }
            */

      },
      SignUp : async function (){
              this.$router.push({
                name: 'Home',
              })
        /*
        try {
              const response = await axios.get(apiURL+"signUp/")
              this.$router.push({
                name: 'Home',
              })
            } catch (error) {
                console.log(error);
            }
            */
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
  }
  .usernameInput{
      grid-column: 2 / 2;
      grid-row: 2 / 2;
      justify-self: center;
      align-self: center;
  }
  .passwordInput{
      display: inline-block;
      grid-column: 2 / 2;
      grid-row: 3 / 3;
      justify-self: center;
      align-self: center;
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
