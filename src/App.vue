<template>
  <div>
    <small>
      This site is built with <a href="https://vuejs.org/" target="_blank" style="color:#69E781;">VueJS</a> and 
      <a href="https://www.iviewui.com/" target="__blank">IView</a>. 
      Find the code <a href="https://github.com/lifeofsaif/lifeofsaif.github.io" target="_blank">here</a>.
    </small>    
    <div>
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="sass">

</style>
