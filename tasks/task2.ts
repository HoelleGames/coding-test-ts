/**
 * 
 * Task 2 - Game Config Type Safety
 *
 * Objective:
 * Identify and resolve the type safety issue in the provided game configuration code.
 * Implement a solution that ensures type consistency and prevents runtime errors.
 */

interface IFeatureDefinition {
  type: string; // The type of the feature
  reels: number[][]; // The reels of the feature
}

interface IAlternativeFeatureDefinition {
  type: string; // The type of the feature
  symbolOdds: number[]; // The odds of each symbol appearing
  isWheel: boolean; // Whether the feature is a wheel
}

type TFeatureDefinition = IFeatureDefinition | IAlternativeFeatureDefinition;

interface IGameConfig {
  features: Record<string, TFeatureDefinition>; // The features of the game
}

const gameConfig: IGameConfig = {
  features: {
    featureA: {
      type: "freespins",
      reels: [[1, 2, 3], [4, 5, 6]],
      symbolOdds: [1, 2, 3],
    },
    featureB: {
      type: "wheel",
      symbolOdds: [1, 2, 3],
      isWheel: true,
    },
  }
};
