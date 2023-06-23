import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  xit('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms "abcdef" to "ABCDEF"', () => {
    expect(pipe.transform('abcdef')).toBe('Abcdef');
  });
  
});
