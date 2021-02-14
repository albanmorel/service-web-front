<template>
  <div class="itemsList">
    <h1><a class="pasdutoutunrickroll" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{{title}}</a></h1>
    <div class="mainWrapper">
        <div class="lesfamchod2taregion"><a class="pasdutoutunrickroll" href="https://www.youtube.com/results?search_query=naked+news">LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br>LES FAM CHOD 2 TA REGION<br></a></div>
        <div class="lesfamchod2taregion2"><a class="pasdutoutunrickroll" href="https://www.youtube.com/results?search_query=naked+news">LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br>LES FAM TRE CHOD 2 TON DEPARTEMENT<br></a></div>
        <ul v-if="isGame=='true'">
            <li v-for="item in items" :key="item.game_id" class="itemsWrapper" @click="redirectToComments(item.game_id)">
                <h3 class="itemsName">{{item.name}} ({{item.is_online ? 'Multijoueurs' : 'Solo'}})</h3>
                <div class="separator"></div>
                <h4 class="itemsScore dot" :class=" { 'greendot': item.score > 65, 'reddot': item.score < 40}">{{item.score === -1 ? "?" : item.score === 100 ? 99 : item.score}}</h4>
                <p class="itemsDesc">{{item.description}}</p>
            </li>
        </ul>
        <ul v-else>
            <li v-for="item in items" :key="item.avis_id" class="itemsWrapper">
                <h3 class="itemsName">{{item.user.username}}</h3>
                <div class="separator"></div>                
                <h4 class="itemsScore">
                  <span @click="likePost(item)"><img src='../../public/img/icons/like.png'><span class="likeCounter">{{item.like}}    </span></span>
                  <span @click="dislikePost(item)"><img src='../../public/img/icons/dislike.png'><span class="dislikeCounter">{{item.dislike}}</span></span>
                </h4>
                <p class="itemsDesc">{{item.comment}}</p>
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
  methods: {
    redirectToComments: function (itemId){
      this.$router.push({
        name: 'Comments',
        params: { gameId: itemId }
      })      
    },
    likePost: function (item){
      this.updateAvis(item.avis_id, "addLike");
      item.like+=1;
    },
    dislikePost: function (item){
      this.updateAvis(item.avis_id, "addDislike");
      item.dislike+=1;
    },
    updateAvis: async function(avisId, action){      
      try {
        await axios.get(apiURL+"avis/"+avisId+"/"+action+"/")
      } catch (error) {
          console.log(error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
