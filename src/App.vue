<template>
  <div id="app">
    <Header :title="pageTitle" />
    <AddTask @add-task="addTask" @reset-tasks="resetTasks" />
    <TaskList @remove-task="removeTask" :tasks="tasks" />
    <TaskView :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import TaskList from "./components/TaskList.vue";
import TaskView from "./components/TaskView.vue";
import AddTask from "./components/AddTask.vue";
import { Task } from "./models/Tasks.model";

export default Vue.extend({
  name: "App",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  components: {
    Header,
    TaskList,
    TaskView,
    AddTask,
  },
  computed: {
    pageTitle(): string {
      let title = "Task Progress";
      // later change page title based on route
      return title;
    },
  },
  methods: {
    removeTask(id: number) {
      console.log("removing task ", id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addTask(task: Task) {
      console.log("adding task ", task);
      this.tasks.push({
        ...task,
        id: this.tasks.length + 1,
      });
    },
    resetTasks() {
      console.log("resetting tasks");
      this.tasks = [];
    },
  },
  created() {
    this.$store.dispatch("fetchTasks");
    this.tasks = this.$store.getters.getTasks;
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 700px;
  margin: 1rem auto;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn--primary {
  background-color: #24a0ed;
}

.btn--accent {
  background-color: #03dac6;
  color: #000;
  font-weight: 700;
}

.btn--danger {
  background-color: #dc3545;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}
</style>
