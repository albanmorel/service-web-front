<template>
  <div class="home">
    <itemsList title="Commentator" :items="games" isGame='true'></itemsList>
  </div>
</template>

<script>
// @ is an alias to /src
import itemsList from '@/components/itemsList.vue'

const axios = require('axios');
const apiURL = 'http://163.172.182.29:8080/api/'
export default {
  name: 'Home',
  components: {
    itemsList
  },  
  created : function () {
    this.fetchData();
  },
  data() {
    return {
      games : [],
    };
  },
    methods: {      
        fetchData: async function () {
            try {
                const response = await axios.get(apiURL+"games/")
                if (response.data.length>0){
                  this.games = response.data;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
