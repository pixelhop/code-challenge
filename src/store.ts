import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    currentStep: 1,
    isDisabled: false,
    gridX: 5,
    gridY: 3,
  }),

  actions: {
    nextStep() {
      this.currentStep++;
    },
    setButtonDisabled(val: boolean) {
      this.isDisabled = val;
    },
    setGridSize(gridX: number, gridY: number) {
      this.gridX = gridX;
      this.gridY = gridY;
    },
  },

  getters: {},
});
