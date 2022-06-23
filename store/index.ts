import { defineStore } from "pinia";

interface State {
  counter: number;
}

export default defineStore("counter", {
  state: (): State => ({
    counter: 0,
  }),
});
