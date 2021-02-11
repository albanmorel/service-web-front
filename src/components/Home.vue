<template>
  <div class="home">
    <itemsList title="MON GROS TITRE LA HMMMMMM" :items="games" isGame='true'></itemsList>
  </div>
</template>

<script>
// @ is an alias to /src
import itemsList from '@/components/itemsList.vue'

export default {
  name: 'Home',
  components: {
    itemsList
  },
  props:["games"]
}
</script>
