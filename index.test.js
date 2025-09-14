const { formatDate, capitalize } = require('./index');

test('formatDate should return ISO date string without time', () => {
  const result = formatDate(new Date('2025-09-14T12:34:56Z'));
  expect(result).toBe('2025-09-14');
});

test('capitalize should capitalize first letter of string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
});
