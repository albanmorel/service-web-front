<template>
  <div class="comments">
    <itemsList title="Commentator" :items="comments" isGame='false' :gameId="gameId"></itemsList>
  </div>
</template>

<script>
// @ is an alias to /src
import itemsList from '@/components/itemsList.vue'


const axios = require('axios');
const apiURL = 'http://163.172.182.29:8080/api/'
export default {
  name: 'Comments',
  params: {gameId: String},  
  components: {
    itemsList
  },
  created : function () {
    this.fetchData();
  },
  data() {
    return {
      comments : [],
    };
  },

    methods: {      
        fetchData: async function () {
            try {
                const response = await axios.get(apiURL+"games/"+this.$route.params["gameId"]+"/avis/")
                if (response.data.length>0){
                  this.comments = response.data;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
