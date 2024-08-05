import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL;

const headers = {
  Authorization: localStorage.getItem("token"),
};

export const useTaskStore = defineStore("task", {
  state: () => ({ tasksListState: {}, completedTasksListState: [] }),
  getters: {
    tasksList: (state) => state.tasksListState,
    completedTasksList: (state) => state.completedTasksListState,
  },
  actions: {
    async getTasks() {
      const result = await axios.get(`${url}/tasks`, { headers: headers });
      this.tasksListState = result.data;
      return result;
    },
    async getCompletedTasks() {
      const result = await axios.get(`${url}/tasks/completed`, {
        headers: headers,
      });
      this.completedTasksListState = result.data;
      return result;
    },
    async completeTask({ id }) {
      const result = await axios.get(`${url}/tasks/${id}/accept`, {
        headers: headers,
      });
      return result;
    },
  },
});
