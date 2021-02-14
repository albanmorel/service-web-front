<template>
  <div id="app" v-cloak>    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {
    };
  },
    created : function () {},
    computed :{},

    methods: {},
};

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  [v-cloak] {
      display: none;
  }

  *{
      margin:0;
      padding:0;
  }

  body{
      font:15px/1.3 'Open Sans', sans-serif;
      color: #adbfd2;
      text-align:center;
      background-color: #242424;
  }

  section, footer, header, aside, nav{
      display: block;
  }

  .dot {
      height: 1.4em;
      width: 1.4em;
      background-color: darkorange;
      border-radius: 50%;
      display: inline-block;
      color: white;
  }
  .greendot {
      background-color: limegreen;
  }
  .reddot {
      background-color: red;
  }

  .pasdutoutunrickroll{
      text-decoration: none;
      color: inherit;
      cursor: default;
  }

  .itemsWrapper {
      display: grid;
      grid-template-columns: 85% 15%;
      grid-auto-rows: 2.5em 7rem ;
      margin-top: 0.6rem;
      padding: 0.6rem;
      border-radius: 10px;
      color: #dadada;
      background-color: #3f5873;
  }
  .mainWrapper{
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 30% 40% 30%;
  }
  .mainWrapper > ul {
      grid-column: 2 / 2;
      grid-row: 1 / 1;
  }
  .lesfamchod2taregion{
      font-size: 3em;
      grid-column: 1 / 1;
      grid-row: 1 / 1;
  }
  .lesfamchod2taregion2{
      font-size: 3em;
      grid-column: 3 / 3;
      grid-row: 1 / 1;
  }
  .itemsName{
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      justify-self: start;
  }
  .itemsScore{
      display: inline-block;
      grid-column: 2 / 2;
      grid-row: 1 / 1;
      justify-self: end;
  }
  .itemsScore > span{
    cursor: pointer;
    user-select: none;
  }
  .itemsDesc{
      grid-column: 1 / 1;
      grid-row: 2 / 2;
      align-self: center;
      justify-self: start;
      max-height: 85%;
      overflow: auto;
      text-align: justify;
  }
  .separator{    
    display: inline-block;
    grid-column: 1 / 2;
    grid-row: 1 / 1;
    align-self: end;
    height: 1px;
    background-color: #dadada;
    max-width: 70%;
  }
  .likeCounter{
    color: #43b043;
  }
  .dislikeCounter{
    color: #f23232;
  }
  img{
    height: 20px;
    width: 20px;
  }

</style>
