import { add, subtract, multiply } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('multiply', () => {
  expect(multiply(2, 3)).toBe(6);
});
