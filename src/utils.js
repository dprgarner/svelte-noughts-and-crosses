const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function getWinner(buttons) {
  for (const [a, b, c] of winningCombinations) {
    if (
      buttons[a] == buttons[b] &&
      buttons[b] == buttons[c] &&
      buttons[a] !== null
    ) {
      return buttons[a];
    }
  }
  return null;
}

export const range = length => Array.from({ length }, (_, i) => i);

export const all = arr => !!arr.reduce((acc, x) => acc && x, true);
