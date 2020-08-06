import { Injectable } from '@angular/core';
import { Article } from './models/article';
import { ArticleFormData } from './article-form/article-form.component';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articlesArray: Article[] = [
    {
      id: 1,
      title: 'jedna',
      text: 'dva',
      timestamp: new Date(),
      author: {
        email: 'martin@nuc.cz',
        name: 'Martin'
      }
    },
    {
      id: 2,
      title: 'dalsi title',
      text: 'bla bla',
      timestamp: new Date(),
      author: {
        email: 'martin@nuc.cz',
        name: 'Martin'
      }
    },
  ];

  constructor() { }

  deleteArticle(articleToDelete: Article): void {
    this.articlesArray = this.articlesArray.filter(
      (article) => article !== articleToDelete
    );
  }

  createArticle(articleFormData: ArticleFormData): void {
    this.articlesArray.push({
      ...articleFormData,
      id: this.getUniqueId(),
      timestamp: new Date(),
    });
  }

  getArticles(): Article[] {
    return this.articlesArray;
  }

  private getUniqueId(): number {
    if (!this.articlesArray.length) {
      return 1;
    }
    return this.articlesArray[this.articlesArray.length - 1].id + 1;
  }
}
