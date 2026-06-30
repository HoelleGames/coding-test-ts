/**
 *
 * Task 6 - Slot Game State Machine
 *
 * Objective:
 * Implement a typed state machine that models a slot game's spin cycle.
 * Each phase should carry only the data available at that point.
 *
 * Spin cycle:
 *   IDLE → SPINNING → EVALUATING → AWARDING → IDLE
 *
 * Implement the following:
 *
 *   scoreReels(reelMatrix)
 *                 Check the middle row for consecutive matching symbols
 *                 from the left. Return the total win amount and winlines.
 *                 Return a zero-win result if the run is fewer than 3.
 *
 *   spin(bet)     Only valid from IDLE. Deduct the bet, call spinReels(),
 *                 then move to EVALUATING.
 *
 *   evaluate()    Only valid from EVALUATING. Call scoreReels() on the
 *                 reel matrix, then move to AWARDING.
 *
 *   award()       Only valid from AWARDING. Credit winAmount to balance,
 *                 then move to IDLE.
 *
 * Constraints:
 *   - Calling any method in the wrong phase must throw an Error.
 *   - Calling spin() with a bet that exceeds the balance must throw an Error.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

interface Winline {
  symbol: number;
  count: number;
  payout: number;
}

// reelMatrix[row][reel] — rows: 0 = top, 1 = middle, 2 = bottom
type ReelMatrix = number[][];

type GameState =
  | { phase: 'idle';       balance: number }
  | { phase: 'spinning';   bet: number }
  | { phase: 'evaluating'; bet: number; reelMatrix: ReelMatrix }
  | { phase: 'awarding';   winAmount: number; winlines: Winline[] };

// payouts[symbol][count] — minimum winning run is 3
const PAYOUTS: Record<number, number[]> = {
  0: [0, 0, 0,  5, 10, 50],
  1: [0, 0, 10, 25, 125],
  2: [0, 0, 0,  5, 10, 50],
  3: [0, 0, 0,  2,  5, 25],
};

// ─── Provided helper (do not modify) ─────────────────────────────────────────

/** Simulates reels spinning and returns the resulting matrix. */
async function spinReels(): Promise<ReelMatrix> {
  await new Promise(r => setTimeout(r, 500));
  return [
    [2, 3, 1, 2, 0],
    [1, 1, 1, 3, 2],
    [0, 2, 3, 1, 1],
  ];
}

// ─── Your implementation ──────────────────────────────────────────────────────

function scoreReels(reelMatrix: ReelMatrix): { winAmount: number; winlines: Winline[] } {
  // TODO
  return { winAmount: 0, winlines: [] };
}

class SlotMachine {
  private state: GameState;

  constructor(initialBalance: number = 1000) {
    this.state = { phase: 'idle', balance: initialBalance };
  }

  getState(): GameState {
    return this.state;
  }

  async spin(bet: number): Promise<void> {
    // TODO
  }

  evaluate(): void {
    // TODO
  }

  award(): void {
    // TODO
  }
}

// ─── Tests ────────────────────────────────────────────────────────────────────
// spinReels() always returns the same matrix.
// Middle row: [1, 1, 1, 3, 2] → symbol 1, three-of-a-kind → payout 10.

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

async function runTests() {
  const machine = new SlotMachine(1000);

  // Test 1: starts in IDLE
  assert(machine.getState().phase === 'idle', 'Test 1 failed: should start in idle');

  // Test 2: spin() transitions to EVALUATING
  await machine.spin(50);
  assert(machine.getState().phase === 'evaluating', 'Test 2 failed: should be evaluating after spin');

  // Test 3: evaluate() transitions to AWARDING with the correct win amount
  machine.evaluate();
  const afterEval = machine.getState();
  assert(afterEval.phase === 'awarding', 'Test 3a failed: should be awarding after evaluate');
  assert(
    afterEval.phase === 'awarding' && afterEval.winAmount === 10,
    `Test 3b failed: expected winAmount 10, got ${afterEval.phase === 'awarding' ? afterEval.winAmount : '?'}`,
  );

  // Test 4: award() returns to IDLE with balance correctly updated (1000 - 50 + 10 = 960)
  machine.award();
  const afterAward = machine.getState();
  assert(afterAward.phase === 'idle', 'Test 4a failed: should be idle after award');
  assert(
    afterAward.phase === 'idle' && afterAward.balance === 960,
    `Test 4b failed: expected balance 960, got ${afterAward.phase === 'idle' ? afterAward.balance : '?'}`,
  );

  // Test 5: calling a method in the wrong phase throws
  let threw = false;
  try { machine.evaluate(); } catch { threw = true; }
  assert(threw, 'Test 5 failed: evaluate() in idle phase should throw');

  // Test 6: spin() with insufficient balance throws
  const poorMachine = new SlotMachine(10);
  let threw2 = false;
  try { await poorMachine.spin(50); } catch { threw2 = true; }
  assert(threw2, 'Test 6 failed: spin() with bet > balance should throw');

  console.log('All tests passed!');
}

runTests()