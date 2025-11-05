import { expect, test } from '@rstest/core';

import {} from '../../dist/esm/apis/api1165'

test('squared', () => {
  expect((4)).toBe(4);
  expect((12 * 12)).toBe(144);
});