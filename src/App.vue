<template>
  <div>
    
    <div>
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div>
    <router-view></router-view>
    <small>Find the Code for this site <a href="https://github.com/lifeofsaif/lifeofsaif.github.io" target="_blank">*here*</a></small>
  </div>
</template>

<style lang="sass">

a {
  color: #515a6e !important;
  &:hover {
    color: #69E781 !important;
  }
}
</style>
