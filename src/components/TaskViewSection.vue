<template>
  <div>
    <div class="task-view__header">*[{{ sectionTitle }}]*:</div>
    <div class="task-view__item" v-for="task in sectionTasks" :key="task.id">
      <strong>- </strong>
      <a :href="task.jiraUrl" target="_blank">{{ task.jiraUrl }}</a>
      <span>{{ task.jiraTitle }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TaskViewSection",
  props: {
    sectionTitle: String,
    sectionTasks: Array,
  },
});
</script>

<style lang="scss" scoped>
.task-view__header {
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-top: 1rem;
  margin-bottom: 5px;
}

.task-view__item {
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
}
</style>
