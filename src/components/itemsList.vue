<template>
  <div class="itemsList">
    <h1><a class="pasdutoutunrickroll" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{{title}}</a></h1>
    <div class="mainWrapper">
        <span v-html="retour" @click="goToPreviousPage"></span>
        <!--<div class="lesfamchod2taregion"><a class="pasdutoutunrickroll" href="https://www.youtube.com/results?search_query=naked+news">LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br></a></div>-->
        <!--<div class="lesfamchod2taregion2"><a class="pasdutoutunrickroll" href="https://www.youtube.com/results?search_query=naked+news">LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br></a></div>-->
        <ul v-if="isGame=='true'">
            <li v-for="item in items" :key="item.game_id" class="itemsWrapper" @click="redirectToComments(item.game_id)">
                <h3 class="itemsName">{{item.name}} ({{item.is_online ? 'Multijoueurs' : 'Solo'}})</h3>
                <div class="separator"></div>
                <h4 class="itemsScore dot" :class=" { 'greendot': item.score > 65, 'reddot': item.score < 40}">{{item.score === -1 ? "?" : item.score === 100 ? 99 : item.score}}</h4>
                <p class="itemsDesc">{{item.description}}</p>
            </li>
            <li class="addItemWrapper" @click="toggleGameForm" :class="{'inactive' : addingNewItem}">
                <h1 class="addItem">+</h1>
            </li>

            <li class="itemsWrapper" :class="{'inactive' : !addingNewItem}">
                <h3 class="itemsName"> <input type="text" v-model="newGameTitle" placeholder='Game Title'></h3>
                <h3 class="itemsName isOnline-checkbox"> <input type="checkbox" v-model="newGameisOnline"> Online ?</h3>
                <div class="separator"></div>
                <span class="itemsScore close-gameform-btn" @click="toggleGameForm"> X </span>
                <span class="itemsDesc gamedesc"><textarea v-model="newGameDesc" placeholder='Game Description'></textarea></span>
                <button class="createItem-btn" @click="addNewGame"> Valider </button>
            </li>
        </ul>
        <ul v-else>
            <li v-for="item in items" :key="item.avis_id" class="itemsWrapper">
                <h3 class="itemsName">{{item.user.username}}</h3>
                <div class="separator"></div>                
                <h4 class="itemsScore">
                  <span @click="likePost(item)"><img src='../../public/img/icons/like.png'><span class="likeCounter" :class="{'active' : hasLiked}">{{item.like}}</span></span>
                  <span @click="dislikePost(item)"><img src='../../public/img/icons/dislike.png'><span class="dislikeCounter" :class="{'active' : hasDisliked}">{{item.dislike}}</span></span>
                </h4>
                <p class="itemsDesc">{{item.comment}}</p>
            </li>

            <li class="addItemWrapper" @click="toggleGameForm" :class="{'inactive' : addingNewItem}">
                <h1 class="addItem">+</h1>
            </li>

            <li class="itemsWrapper" :class="{'inactive' : !addingNewItem}">
                <h3 class="itemsName"> <input type="text" v-model="newCommentsUsername" placeholder='Votre pseudo'></h3>
                <h3 class="itemsName isOnline-checkbox"> <input type="checkbox" v-model="newCommentsIsPositive"> Positif </h3>
                <div class="separator"></div>
                <span class="itemsScore close-gameform-btn" @click="toggleGameForm"> X </span>
                <span class="itemsDesc gamedesc"><textarea v-model="newCommentsContent" placeholder='Commentaire'></textarea></span>
                <button class="createItem-btn" @click="addNewComment"> Valider </button>
            </li>
        </ul>

    </div>
  </div>
</template>

<script>

const axios = require('axios');
const apiURL = 'http://163.172.182.29:8080/api/';

export default {
  name: 'itemsList',
  props: {title: String, items: Array, isGame: String},
  data() {
    return {
      hasLiked : false,
      hasDisliked : false,
      retour : "< retour",
      newGameTitle: "",
      newGameDesc: "",
      newGameisOnline: false,
      addingNewItem : false,
      newCommentsContent : "",
      newCommentsUsername : "",
      newCommentsIsPositive : true,
    }
  }, 
    created : function () {}, 
  methods: {
    redirectToComments: function (itemId){
      this.$router.push({
        name: 'Comments',
        params: { gameId: itemId }
      })      
    },
    likePost: function (item){
      if (!this.hasLiked){
        this.updateAvis(item.avis_id, "addLike");
        item.like+=1;
        this.hasLiked = true;
        if (this.hasDisliked){
          this.unDislikePost(item);
          this.hasDisliked = false;
        }
      }
      else{        
          this.unLikePost(item);
          this.hasLiked = false;
      }
    },
    dislikePost: function (item){
      if (!this.hasDisliked){
        this.updateAvis(item.avis_id, "addDislike");
        item.dislike+=1;
        this.hasDisliked = true;
        if (this.hasLiked){
          this.unLikePost(item);
          this.hasLiked = false;
        }
      }   
      else{        
          this.unDislikePost(item);
          this.hasDisliked = false;
      }   
    },
    unLikePost: function (item){
        this.updateAvis(item.avis_id, "removeLike");
        item.like-=1;
    },
    unDislikePost: function (item){
        this.updateAvis(item.avis_id, "removeDislike");
        item.dislike-=1;    
    },
    updateAvis: async function(avisId, action){      
      try {
        await axios.get(apiURL+"avis/"+avisId+"/"+action+"/")
      } catch (error) {
          console.log(error);
      }
    },
    goToPreviousPage: function() {
      this.$router.go(-1);
    },
    toggleGameForm: function(){
      this.addingNewItem = !this.addingNewItem;
    },
    addNewComment: async function(){
          let newCommentsGameId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);
          console.log(this.newCommentsIsPositive);
          await axios.post(
              apiURL+"games/"+newCommentsGameId+"/avis/",
              {
                comment: this.newCommentsContent,
                dislike: 0,
                like: 0,
                user_uuid: "8f852b9f-d765-46e6-b8ab-04466c9908aa",//this.newCommentsUsername,
                is_positive: this.newCommentsIsPositive,
              },
          )
          .then((response) => {
            console.log(response);                
            this.$router.go();
          })
          .catch(function (error) {
            console.log(error);
          })
      
    },
    addNewGame: async function(){
          await axios.post(
              apiURL+"games/",
              {
                description: this.newGameDesc,
                isOnline: this.newGameisOnline,
                name: this.newGameTitle,
              },
          )
          .then((response) => {
            console.log(response);                
            this.$router.go();
          })
          .catch(function (error) {
            console.log(error);
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addItemWrapper{    
      display: grid;
      grid-template-columns: auto;
      grid-auto-rows: 2.5em 7rem ;
      margin-top: 0.6rem;
      padding: 0.6rem;
      border-radius: 10px;
      color: #dadada;
      background-color: #3f5873;
  }
  .addItemWrapper.inactive{
    display: none;
  }  
  .addItemWrapper > .addItem {
    grid-column: 1/1;
    justify-self: center;
  }
  .addItem{
    user-select: none;
    cursor: pointer;
  }
  .itemsWrapper.inactive{
    display: none;
  }
  .close-gameform-btn{
    user-select: none;
    cursor: pointer;
  }
  .gamedesc > textarea{
    width: 90%;
    height: 90%;
  }
  .gamedesc{
    width: 100%;
    height: 100%;
  }
  .createItem-btn{    
    border-radius: 7px;
    border: solid 1px transparent;
    padding: 0.5rem;
    user-select: none;
    font-weight: bold;
    background-color: #dadada;
    grid-column: 2/2;
    grid-row: 2/2;
    width: 100%;
    height: 50%;
    align-self: center;
  }
  .isOnline-checkbox{
    justify-self: end;
  }
</style>
