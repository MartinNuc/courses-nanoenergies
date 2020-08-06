import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  describe('creating', () => {
    it('creates article with unique id', () => {
      const text = `${Math.random()}`;
      service.createArticle({
        text,
        title: 'bla bla',
        author: {
          email: 'fhsldfh@hflishef',
          name: 'fhdskuhfsd',
        },
      });
      expect(service.articlesArray.find(item => item.text === text)).toBeTruthy();
    });
    it('generates timestamp', () => {
      service.createArticle({
        text: 'xxxx',
        title: 'bla bla',
        author: {
          email: 'fhsldfh@hflishef',
          name: 'fhdskuhfsd',
        },
      });
      const last = service.articlesArray[service.articlesArray.length - 1];
      const now = new Date();
      expect(last.timestamp.valueOf()).toBeCloseTo(now.valueOf(), -3);
    });
  });

  describe('deleting', () => {
    it('deletes article', () => {
      const last = service.articlesArray[service.articlesArray.length - 1];
      const length = service.articlesArray.length;
      service.deleteArticle(last);
      expect(service.articlesArray.length).toBe(length - 1);
    });

    it(`doesn't modify articles when deleting non existing one`, () => {});
  });
});
