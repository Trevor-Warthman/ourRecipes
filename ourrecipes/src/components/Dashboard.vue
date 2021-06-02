<template>
  <div class="dashContainer">
    <h1>{{ title }} </h1>
    <div class="dashBoarder" v-bind:style="{paddingBottom: heightPercOfWidth}"></div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    title: String,
    heightPercOfWidth: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashContainer {
    height:30%width;
}
.dashBoarder {
    border: 2px solid black;
    width: 100%;
    height: 0;
    padding-bottom: 35%;
}
</style>