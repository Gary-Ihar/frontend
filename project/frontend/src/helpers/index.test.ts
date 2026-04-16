import { describe, expect, test } from '@jest/globals';
import { replaceInfinityAndNaN, summ } from './index';

describe('replaceInfinityAndNaN', () => {
  test('заменяет положительную бесконечность на 0', () => {
    expect(replaceInfinityAndNaN(Number.POSITIVE_INFINITY)).toBe(0);
  });

  test('заменяет отрицательную бесконечность на 0', () => {
    expect(replaceInfinityAndNaN(Number.NEGATIVE_INFINITY)).toBe(0);
  });

  test('заменяет NaN на 0', () => {
    expect(replaceInfinityAndNaN(Number.NaN)).toBe(0);
  });

  test('возвращает обычные числа без изменений', () => {
    expect(replaceInfinityAndNaN(0)).toBe(0);
    expect(replaceInfinityAndNaN(-0)).toBe(-0);
    expect(replaceInfinityAndNaN(42)).toBe(42);
    expect(replaceInfinityAndNaN(-3.14)).toBe(-3.14);
  });
});

describe('summ', () => {
  test('без аргументов возвращает 0', () => {
    expect(summ()).toBe(0);
  });

  test('складывает обычные числа', () => {
    expect(summ(2, 2)).toBe(4);
    expect(summ(1, 2, 3)).toBe(6);
    expect(summ(-1, 1)).toBe(0);
  });

  test('NaN считается как 0', () => {
    expect(summ(2, Number.NaN)).toBe(2);
    expect(summ(Number.NaN, Number.NaN, Number.NaN)).toBe(0);
  });

  test('бесконечности считаются как 0', () => {
    expect(
      summ(Number.POSITIVE_INFINITY, Number.NaN, Number.NEGATIVE_INFINITY),
    ).toBe(0);
    expect(summ(5, Number.POSITIVE_INFINITY)).toBe(5);
  });
});
