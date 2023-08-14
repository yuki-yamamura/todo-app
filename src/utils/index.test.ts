import { toUpperCaseFirstCharacter } from '.';

describe('toUpperCaseFirstCharacter', () => {
  it('transforms first character of passed string into upper case', () => {
    expect(toUpperCaseFirstCharacter('alice')).toBe('Alice');
  });
});
