import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { Article } from './models/article';
import { Subscription } from 'rxjs';

describe('ArticleService', () => {
  let service: ArticleService;

  let articlesArray!: Article[];
  let articleArraySubscription: Subscription;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  beforeEach(() => {
    articleArraySubscription = service.articles$.subscribe(arr => {
      articlesArray = arr;
    });
  });

  afterEach(() => {
    articleArraySubscription.unsubscribe();
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
      expect(articlesArray.find(item => item.text === text)).toBeTruthy();
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
      const last = articlesArray[articlesArray.length - 1];
      const now = new Date();
      expect(last.timestamp.valueOf()).toBeCloseTo(now.valueOf(), -3);
    });
  });

  describe('deleting', () => {
    it('deletes article', () => {
      const last = articlesArray[articlesArray.length - 1];
      const length = articlesArray.length;
      service.deleteArticle(last);
      expect(articlesArray.length).toBe(length - 1);
    });

    it(`doesn't modify articles when deleting non existing one`, () => {});
  });
});
