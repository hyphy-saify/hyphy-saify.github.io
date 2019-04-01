<template>
  <div style="  border-bottom: solid 1px #fff6bc;padding-bottom: 20px; max-width: 70%;">
    <div style="height: 200px;overflow: hidden;text-overflow: ellipsis;">
      <slot/>
    </div>
    <small><a :href="continueReading">... continue reading ...</a></small>
  </div>
</template>

<style lang="sass">
</style>
<script>
export default {
  props: {
    continueReading: String,
  },
};
</script>
