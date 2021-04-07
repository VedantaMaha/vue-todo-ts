import { Task } from "@/models/Tasks.model";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [] as Task[],
  },
  mutations: {
    INIT_TASKS(state, tasks: Task[]) {
      state.tasks = tasks;
      localStorage.setItem("TASK_LIST", JSON.stringify(state.tasks));
    },
    ADD_TASKS(state, task: Task) {
      state.tasks = [...state.tasks, task];
      localStorage.setItem("TASK_LIST", JSON.stringify(state.tasks));
    },
    REMOVE_TASKS(state, taskId: number) {
      const remainingTasks = state.tasks.filter((task) => task.id !== taskId);
      state.tasks = remainingTasks;
      localStorage.setItem("TASK_LIST", JSON.stringify(state.tasks));
    },
    RESET_TASKS(state) {
      state.tasks = [];
      localStorage.setItem("TASK_LIST", JSON.stringify(state.tasks));
    },
    UPDATE_TASKS(state, updatedTask: Task) {
      state.tasks.forEach((task) => {
        if (task.id === updatedTask.id) {
          task = updatedTask;
        }
      });
      localStorage.setItem("TASK_LIST", JSON.stringify(state.tasks));
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
      const localStorageTasks = localStorage.getItem("TASK_LIST");
      if (
        typeof localStorageTasks === "string" &&
        JSON.parse(localStorageTasks).length
      ) {
        context.commit("INIT_TASKS", JSON.parse(localStorageTasks));
      } else {
        // if there is no tasks exist in localstorage, use default tasks
        context.commit("INIT_TASKS", tasks);
      }
    },
    addTask(context, task: Task) {
      context.commit("ADD_TASKS", task);
    },
    removeTask(context, taskId: number) {
      context.commit("REMOVE_TASKS", taskId);
    },
    resetTask(context) {
      context.commit("RESET_TASKS");
    },
    updateTask(context, updatedTask: Task) {
      context.commit("UPDATE_TASKS", updatedTask);
    },
  },
  modules: {},
  getters: {
    getTasks(state): Task[] {
      return state.tasks;
    },
  },
});
