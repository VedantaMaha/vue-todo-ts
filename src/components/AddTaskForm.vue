<template>
  <form @submit="onSubmit">
    <div class="form-control">
      <label>Jira URL</label>
      <input
        type="text"
        v-model="jiraUrl"
        name="text"
        placeholder="Add Jira URL"
      />
    </div>
    <div class="form-control">
      <label>Jira Title</label>
      <input
        type="text"
        v-model="jiraTitle"
        name="text"
        placeholder="Add Jira Title"
      />
    </div>
    <input
      type="submit"
      value="Submit Task"
      class="btn btn-block btn--accent"
    />
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AddTaskForm",
  data() {
    return {
      jiraUrl: "",
      jiraTitle: "",
    };
  },
  methods: {
    onSubmit(e: any) {
      e.preventDefault();
      if (!this.jiraTitle) {
        return;
      }
      const payload = {
        jiraUrl: this.jiraUrl,
        jiraTitle: this.jiraTitle,
        status: "todo",
      };
      this.$emit("add-task", payload);
      this.jiraUrl = "";
      this.jiraTitle = "";
    },
  },
});
</script>

<style lang="scss" scoped>
.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
