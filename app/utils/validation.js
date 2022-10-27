import {maps} from './maps';

export function validateScores(scoreA, scoreB) {
  if (Math.max(scoreA, scoreB) !== 3) {
    return 'someone needs to win the match';
  }
}

export function validateGoal(goal) {
  if (goal < 0) {
    return '{field} must be positive';
  }
}

export function validateSprintName(name) {
  if (name.length < 3) {
    return '{field} must be 3 characters or longer';
  }
}

export function validatePlayerName(name) {
  if (!name || name.length < 1) {
    return '{field} must be present';
  }
}

export function validateSprintId(sprintId) {
  if (!sprintId) {
    return '{field} must be present';
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
