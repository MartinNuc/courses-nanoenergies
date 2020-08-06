import { WordsCountPipe } from './words-count.pipe';

describe('WordsCountPipe', () => {
  it('create an instance', () => {
    const pipe = new WordsCountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 0 for empty string', () => {
    const pipe = new WordsCountPipe();
    const emptyString = '';
    const result = pipe.transform(emptyString);
    expect(result).toBe(0);
  });

  it('should return 3 for three word text', () => {
    const pipe = new WordsCountPipe();
    const text = 'Ahoj jak se';
    const result = pipe.transform(text);
    expect(result).toBe(3);
  });

  it('should ignore multiple space', () => {
    const pipe = new WordsCountPipe();
    const text = '   ';
    const result = pipe.transform(text);
    expect(result).toBe(0);
  });

  it('should throw exception for other than string value', () => {
    const pipe = new WordsCountPipe();
    // @ts-expect-error
    expect(() => pipe.transform(undefined)).toThrow();
  });
});
