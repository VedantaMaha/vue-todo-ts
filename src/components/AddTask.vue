<template>
  <div class="add-task">
    <div class="add-task__action">
      <button @click="$emit('reset-tasks')" class="btn btn--danger">
        Reset
      </button>
      <button
        @click="displayAddTask = !displayAddTask"
        class="btn btn--primary"
      >
        Add Task
      </button>
    </div>
    <div v-if="displayAddTask" class="add-task__section">
      <AddTaskForm @add-task="addTask" />
    </div>
  </div>
</template>

<script lang="ts">
import { Task } from "@/models/Tasks.model";
import Vue from "vue";
import AddTaskForm from "./AddTaskForm.vue";

export default Vue.extend({
  name: "AddTask",
  data() {
    return {
      displayAddTask: false,
    };
  },
  components: {
    AddTaskForm,
  },
  methods: {
    addTask(task: Task) {
      this.$emit("add-task", task);
    },
  },
});
</script>

<style lang="scss" scoped>
.add-task {
  display: inline-block;
  width: 100%;

  .add-task__action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .add-task__section {
    border: 1px solid black;
    padding: 0.5rem;
    margin: 5px 5px 1rem;
  }
}
</style>
