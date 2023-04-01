export const map = (
  value: number,
  sMin: number,
  sMax: number,
  dMin: number,
  dMax: number
) => {
  return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
};
export const pi = Math.PI;
export const tau = 2 * pi;
