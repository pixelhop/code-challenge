import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    currentStep: 1,
    isDisabled: false,
    gridX: 5,
    gridY: 3,
    startX: 1,
    startY: 1,
    startOrientation: 'E',
    currentX: 1,
    currentY: 1,
    currentOrientation: 'E',
    shipMovements: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
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
    setStartPos(width: number, length: number, orientation: string) {
      this.startX = width;
      this.startY = length;
      this.startOrientation = orientation;
      this.currentX = width;
      this.currentY = length;
      this.currentOrientation = orientation;
    },
    setShipMovements(shipMovements: string[]) {
      this.shipMovements = shipMovements;
    },
    setShipOrientation(orientation: string) {
      this.currentOrientation = orientation;
    },
    setShipGrid(curX: number, curY: number) {
      this.currentX = curX;
      this.currentY = curY;
    },
    setStep(val: number) {
      this.currentStep = val;
    },
    initializeGame() {
      this.currentStep = 1;
    }
  },

  getters: {},
});
