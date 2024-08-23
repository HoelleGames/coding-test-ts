/**
 * 
 * Task 3 - Winline Calculator
 *
 * Objective:
 * Implement a function called `getWinlines` that calculates and returns an array of Winline objects
 * for a given reel matrix using standard left-to-right slot machine winline logic.
 */

interface Winline {
  count: number; // Number of consecutive matching symbols
  offsets: number[]; // Winline pattern used
  payout: number; // Payout amount for the winline
  symbol: number; // The winning symbol ID
}

const symbolPayouts = [
  [0, 0, 1, 2, 5],
  [0, 0, 2, 4, 10],
  [0, 0, 2, 4, 10],
  [0, 0, 5, 10, 25],
  [0, 0, 10, 20, 50],
];

const winlineOffsets = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [0, 1, 2, 1, 0],
  [2, 1, 0, 1, 2],
];

const exampleReelMatrix1 = [
  [0, 0, 0, 1, 4],
  [4, 4, 1, 1, 1],
  [3, 3, 3, 3, 3],
];

const exampleReelMatrix2 = [
  [4, 4, 4, 4, 2],
  [3, 4, 3, 1, 0],
  [4, 1, 4, 0, 0],
];

const exampleReelMatrix3 = [
  [0, 2, 0, 1, 0],
  [4, 1, 1, 3, 0],
  [0, 2, 2, 3, 3],
];

/**
 * @param reelMatrix - A 2D array representing the slot machine's reel matrix.
 * @returns An array of Winline objects.
 */
function getWinlines(reelMatrix: number[][]): Winline[] {
  return []; // TODO: Implement this function
}

// -------------------------------------------------------------------------------------------------
// Expected outcomes for exampleReelMatrix1, exampleReelMatrix2 and exampleReelMatrix3
// -------------------------------------------------------------------------------------------------

function stringify(value: any) {
  return JSON.stringify(value);
}

console.assert(
  stringify(getWinlines(exampleReelMatrix1)) ===
    stringify([
      { count: 3, offsets: [0, 0, 0, 0, 0], payout: 1, symbol: 0 },
      { count: 5, offsets: [2, 2, 2, 2, 2], payout: 25, symbol: 3 },
    ]),
);

console.assert(
  stringify(getWinlines(exampleReelMatrix2)) ===
    stringify([
      { count: 4, offsets: [0, 0, 0, 0, 0], payout: 10, symbol: 4 },
      { count: 3, offsets: [0, 1, 2, 1, 0], payout: 5, symbol: 4 },
      { count: 3, offsets: [2, 1, 0, 1, 2], payout: 5, symbol: 4 },
    ]),
);

console.assert(stringify(getWinlines(exampleReelMatrix3)) === stringify([]));
