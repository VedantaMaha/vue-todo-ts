<template>
  <div id="app">
    <Header :title="pageTitle" />
    <!-- add form to add task component -->
    <TaskList :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import TaskList from "./components/TaskList.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      tasks: [
        {
          id: 1,
          jiraUrl: "https://zettabyte-goa.atlassian.net/browse/AV-3718",
          jiraTitle:
            "[User Management][Visitor] User login as Academic Director but he can see task from other schools when he has also user type Visitor added on him",
          status: "done",
        },
        {
          id: 2,
          jiraUrl: "",
          jiraTitle:
            "explain fariz about material autocomplete and graphql query",
          status: "done",
        },
        {
          id: 3,
          jiraUrl: "https://zettabyte-goa.atlassian.net/browse/AV-3778",
          jiraTitle:
            '[Test Correction][Auto Eval] Add functionality to upload "Element of proof" for Mark Entry of Auto Eval',
          status: "in_progress",
        },
        {
          id: 4,
          jiraUrl: "https://zettabyte-goa.atlassian.net/browse/AV-3796",
          jiraTitle:
            "[Academic Kit][Folder 06] Need improvement on how to display Doc expected folder inside folder 06",
          status: "todo",
        },
        {
          id: 5,
          jiraUrl: "https://zettabyte-goa.atlassian.net/browse/AV-3787",
          jiraTitle:
            '[Test Creation][View of Test Sheet] Displayed different "Type test name" on Test Creation page evaluation by competency',
          status: "stalled",
        },
      ],
    };
  },
  components: {
    Header,
    TaskList,
  },
  computed: {
    pageTitle(): string {
      let title = "Task Progress";
      // later change page title based on route
      return title;
    },
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

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}
</style>
