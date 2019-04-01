<template>
  <div class="blogpost-container" style="  border-bottom: solid 1px #fff6bc;padding-bottom: 20px; max-width: 70%;">
    <div class="blogpost-container__content" style="height: 200px;overflow: hidden;text-overflow: ellipsis;">
      <slot/>
    </div>
    <small><a :href="continueReading">... continue reading ...</a></small>
  </div>
</template>

<style lang="sass">
.blogpost-container {
  &__content {
  -webkit-mask-image: -webkit-gradient(linear, left top, 
    left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  }
}
</style>
<script>
export default {
  props: {
    continueReading: String,
  },
};
</script>
