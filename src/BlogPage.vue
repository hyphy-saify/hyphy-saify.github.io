<template>
  <div class="blog">
    <h2>
      <a href="#/blog" class="blog__title">
        Blog
      </a>
    </h2>
    <router-view class="blog__post" v-if="showRouter"></router-view>
    <div class="blog__posts" v-else>
      <Post1 class="blog__posts__individ"/>
      <Post0 class="blog__posts__individ"/>

    </div>
  </div>
</template>

<style lang="sass">
.blog {
  padding: 10px;
  padding-top:30px;
}
</style>
<script>
import Post1 from "./blogposts/post1.vue";
import Post0 from "./blogposts/post0.vue";

export default {
  components: {
    Post1,
    Post0,
  },
  computed: {
    showRouter: function () {
      return this.$route.path !== "/blog";
    },
  },
  mounted () {
    console.log(this.$route);
  }
};
</script>
