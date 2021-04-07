<template>
  <div class="task-list" v-if="tasks.length">
    <div class="task-list__wrapper">
      <TaskItem
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :isLastTask="index === tasks.length - 1"
        @remove-task="$emit('remove-task', task.id)"
        @update-task="$emit('update-task', JSON.parse(JSON.stringify(task)))"
      />
    </div>
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
  width: 100%;

  .task-list__wrapper {
    border: 1px solid black;
    padding: 0.5rem;
    margin: 5px 5px 1rem;
  }
}
</style>
