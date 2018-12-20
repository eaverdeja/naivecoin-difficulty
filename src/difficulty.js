export const BASE_DIFFICULTY = Number.MAX_SAFE_INTEGER;
export const EVERY_X_BLOCKS = 5;
export const POW_CURVE = 5;

export const getDifficultyParams = index => {
  // INFO: The difficulty is the formula that naivecoin choose to check the proof a work, this number is later converted to base 16 to represent the minimal initial hash expected value.
  // INFO: This could be a formula based on time. Eg.: Check how long it took to mine X blocks over a period of time and then decrease/increase the difficulty based on that. See https://en.bitcoin.it/wiki/Difficulty
  const i = index + 1;
  const step = i / EVERY_X_BLOCKS;
  const base = Math.floor(step) + 1;
  const poweredByPowCurve = Math.pow(base, POW_CURVE);
  const floor = Math.floor(BASE_DIFFICULTY / poweredByPowCurve);
  const difficulty = Math.max(floor, 0);

  return {
    i,
    step,
    base,
    poweredByPowCurve,
    floor,
    difficulty
  };
};
