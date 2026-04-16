export const replaceInfinityAndNaN = (v: number): number => {
  if (v === Number.POSITIVE_INFINITY || v === Number.NEGATIVE_INFINITY) {
    return 0;
  }

  if (Number.isNaN(v)) {
    return 0;
  }

  return v;
};

export const summ = (...rest: number[]): number =>
  rest.reduce((result, number) => result + replaceInfinityAndNaN(number), 0);
