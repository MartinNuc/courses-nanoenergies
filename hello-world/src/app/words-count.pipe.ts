import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsCount',
})
export class WordsCountPipe implements PipeTransform {
  transform(value: string): number {
    if (!this.isString(value)) {
      throw new Error('Input for words count should be a string');
    }
    return value
      .trim()
      .split(/\s+/)
      .filter((words) => words !== '')
      .length;
  }

  isString(input: unknown): input is string {
    return typeof input === 'string';
  }
}
