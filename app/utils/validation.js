import { maps } from './maps';

export function validateScores(scoreA, scoreB) {
  if (Math.max(scoreA, scoreB) !== 3) {
    return 'someone needs to win the match';
  }
}

export function validateScore(score) {
  if (score < 0) {
    return '{field} must be positive';
  }
  if (score > 3) {
    return '{field} must not be greater than 3';
  }
}

export function validateMap(map) {
  const validMap = Object.keys(maps).includes(map);

  if (!validMap) {
    return '{field} must be a valid map';
  }
}
