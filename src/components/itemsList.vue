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
                <h4 class="itemsScore dot" :class=" { 'greendot': item.score > 65, 'reddot': item.score < 40}">{{item.score === -1 ? "?" : item.score}}</h4>
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
      //appel api
      item.like+=1;
    },
    dislikePost: function (item){  
      //appel api   
      item.dislike+=1;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
