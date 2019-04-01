<template>
  <div class="lifeofsaif">
    <div class="lifeofsaif__main">
      <small>
        This site is built with
        <a href="https://vuejs.org/" target="_blank" style="color:#69E781;">VueJS</a> and
        <a href="https://www.iviewui.com/" target="__blank">IView</a>.
        Find the code
        <a href="https://github.com/lifeofsaif/lifeofsaif.github.io" target="_blank">here</a>.
      </small>
      <div>
        <router-link to="/about">About</router-link>|
        <router-link to="/blog">Blog</router-link>
      </div>
      <router-view></router-view>
    </div>
    <div class="lifeofsaif__footer">
      <img src="./img/footer-0.gif" style="object-fit: contain; width:200px;">
    </div>
  </div>
</template>

<style lang="sass">
.lifeofsaif {
  display: flex;
  justify-content: space-between;;
  align-items: stretch;
  flex-direction: column;
  height: 100%;

  &__footer {
    padding: 20px;
  }
}

html, body {
  height:100%;
}

* {
  color: #d3d3d3;
  background-color: #383838;
}
</style>
