import { Task } from "@/models/Tasks.model";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    fetchTasks(context) {
      const tasks: Task[] = [
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
      ];
      context.commit("SET_TASKS", tasks);
    },
  },
  modules: {},
  getters: {
    getTasks(state): Task[] {
      return state.tasks;
    },
  },
});
