<template>
  <div class="task-list" v-if="tasks.length">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @remove-task="$emit('remove-task', task.id)"
    />
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
  display: inline-block;
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0 5px;
}
</style>
