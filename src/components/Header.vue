<template>
  <div class="page-title">
    <h1 class="page-title--text-center">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  props: {
    title: String,
  },
});
</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 1rem;
}
.page-title--text-center {
  text-align: center;
}
</style>
