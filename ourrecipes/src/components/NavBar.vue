<template>
  <div id="nav-bar-main">
    Logo with "Our Recipes"
    <button>Home</button>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    pages: Array,
  },
  //data: {
  //  pageLinks: {
  //   homepage: "linkToHome",
  //},
  //},
};
</script>


<style scoped>
#nav-bar-main {
  top: 0;
  position: absolute;
  background-color: rgb(75, 180, 206);
  height: 50px;
  width: 100%;
}
button {
  height: 100%;
}
</style>