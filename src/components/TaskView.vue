<template>
  <div
    class="task-view"
    v-if="doneTasks.length || inProgressTasks.length || stalledTasks.length"
  >
    <div class="task-view__wrapper">
      <TaskViewSection
        v-if="doneTasks.length"
        sectionTitle="DONE"
        :sectionTasks="doneTasks"
      />
      <TaskViewSection
        v-if="inProgressTasks.length"
        sectionTitle="IN PROGRESS"
        :sectionTasks="inProgressTasks"
      />
      <TaskViewSection
        v-if="stalledTasks.length"
        sectionTitle="STALLED"
        :sectionTasks="stalledTasks"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import TaskViewSection from "./TaskViewSection.vue";
import { Task } from "../models/Tasks.model";

export default Vue.extend({
  name: "TaskView",
  props: {
    tasks: Array as PropType<Task[]>,
  },
  components: {
    TaskViewSection,
  },
  computed: {
    doneTasks(): any[] {
      return this.tasks.filter((task) => task.status === "done");
    },
    inProgressTasks(): any[] {
      return this.tasks.filter((task) => task.status === "in_progress");
    },
    stalledTasks(): any[] {
      return this.tasks.filter((task) => task.status === "stalled");
    },
  },
});
</script>

<style lang="scss" scoped>
.task-view {
  display: inline-block;
  width: 100%;

  .task-view__wrapper {
    border: 1px solid black;
    padding: 0.5rem;
    margin: 5px 5px 1rem;
  }
}
</style>
