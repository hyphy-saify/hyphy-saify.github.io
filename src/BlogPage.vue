<template>
  <div class="blog">
    <h2>
      <a href="#/blog" class="blog__title">
        Blog
      </a>
    </h2>
    <router-view class="blog__post" v-if="showRouter"></router-view>
    <div class="blog__posts" v-else>

      <BlogpostContainer continueReading="#/blog/some-of-my-favorite-vs-code-extentions">
        <Post1 />
      </BlogpostContainer>

    </div>
  </div>
</template>

<style lang="sass">
.blog {
  padding-top:30px;
}
</style>
<script>
import Post1 from "./blogposts/post1.vue";
import Post0 from "./blogposts/post0.vue";
import BlogpostContainer from "./components/blogpostContainer.vue";

export default {
  components: {
    Post1,
    Post0,
    BlogpostContainer,
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
