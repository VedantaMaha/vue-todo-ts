<template>
  <div
    class="task-item"
    :class="{ 'task-item--bottom-space': !isLastTask }"
    :style="{ backgroundColor: statusBackgroundColor }"
  >
    <div class="task-item__data">
      <div class="task-item__data-title">
        <a :href="task.jiraUrl" target="_blank">{{ task.jiraTitle }}</a>
      </div>
      <div class="task-item__data-status">
        <select
          v-model="task.status"
          @change="$emit('update-task', JSON.parse(JSON.stringify(task)))"
          class="task-item__data-select-input"
        >
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
          <option value="stalled">Stalled</option>
        </select>
      </div>
    </div>
    <div class="task-item__action" @click="$emit('remove-task', task.id)">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TaskItem",
  props: {
    task: Object,
    isLastTask: Boolean,
  },
  computed: {
    statusBackgroundColor(): string {
      let backgroundColor = "";
      switch (this.task.status) {
        case "todo":
          backgroundColor = "#fafafa";
          break;
        case "in_progress":
          backgroundColor = "#fff3cd";
          break;
        case "done":
          backgroundColor = "#d4edda";
          break;
        case "stalled":
          backgroundColor = "#f8d7da";
          break;
        default:
          backgroundColor = "#fafafa";
          break;
      }
      return backgroundColor;
    },
  },
});
</script>

<style lang="scss" scoped>
.task-item {
  display: flex;
  background-color: #fafafa;
  padding: 0.5rem;

  .task-item__data {
    width: 95%;

    .task-item__data-title {
      display: block;
      margin-bottom: 5px;
    }

    .task-item__data-status {
      display: block;
    }

    .task-item__data-select-input {
      width: 120px;
    }
  }

  .task-item__action {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}

.task-item--bottom-space {
  margin-bottom: 10px;
}

.fas {
  color: red;
}

a {
  font-size: 14px;
  background: linear-gradient(to bottom, #ff9800 0%, #ff9800 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 2px;
  color: #000;
  text-decoration: none;
  transition: background-size 0.2s;
}

a:hover {
  background-size: 4px 50px;
}
</style>
