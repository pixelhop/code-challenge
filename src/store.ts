import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    currentStep: 1,
  }),

  actions: {
    nextStep() {
      this.currentStep++;
    },
  },

  getters: {
  },
})
