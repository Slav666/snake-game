import { Coords } from "./types";

export const MAX_GRID_SIZE = 13;
export const MIN_GRID_SIZE = 1;

export const INITIAL_COORDS: Coords[] = [[7, 7]];

export const DIRECTION_KEYS: { [key: string]: string } = {
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
};

export const INITIAL_SPEED = 500;
export const SPEED_REDUCTION = 25;
export const MAX_SPEED = 150;

export const LOADING_LEADERBOARD_MESSAGE = "Loading leaderboard...";

export const OPPOSITE_KEYS: { [key: string]: string } = {
  ArrowLeft: "ArrowRight",
  ArrowUp: "ArrowDown",
  ArrowRight: "ArrowLeft",
  ArrowDown: "ArrowUp",
};

export const MAX_NAME_LENGTH = 12;
/** Mocked for now, will be real data soon */
export const INITIAL_HIGH_SCORES = [
  "Bruce Roro",
  "JumboHaggis",
  "Big G",
  "BillyBigBaws",
  "Rando88",
].map((name, i) => ({
  name,
  score: i * 3,
  date: "21/07/2023",
}));

