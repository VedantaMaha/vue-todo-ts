<template>
  <div class="task-list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TaskItem from "./TaskItem.vue";

export default Vue.extend({
  name: "TaskList",
  props: {
    tasks: Array,
  },
  components: {
    TaskItem,
  },
});
</script>

<style lang="scss" scoped>
.task-list {
  border: 1px solid black;
  padding: 1rem;
}
</style>
