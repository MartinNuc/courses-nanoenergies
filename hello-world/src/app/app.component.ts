import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Article } from './models/article';
import { ArticleFormData } from './article-form/article-form.component';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';
import { map, filter, skip, take, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isDropdownOpened = false;

  @ViewChild('dropdownElement')
  set dropdownElement(element: ElementRef<HTMLDivElement>) {
    console.log(element ? 'rendered' : 'destoyed');
  }

  constructor(public articleService: ArticleService) {
    let obs$ = interval(1000)
      .pipe(
        take(4),
        shareReplay(2)
      );

    obs$.subscribe({
      next: x => console.log('obs1',new Date(),  x),
      complete: () => console.log('done')
    });
    setTimeout(() => {
      obs$.subscribe({
        next: x => console.log('obs2', new Date(), x),
        complete: () => console.log('done')
      });
    }, 2300);


    function isPrime(n: number): boolean {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n !== 1 && n !== 0;
    }

    function interval(ms: number): Observable<number> {
      return new Observable<number>(observer => {
        let cnt = 0;
        const intReference = setInterval(() => observer.next(++cnt), ms);
        return () => {
          console.log('cleaned up');
          clearInterval(intReference);
        }
      });
    }

  }

  toggleDropdown(): void {
    this.isDropdownOpened = !this.isDropdownOpened;
  }

  createArticle(data: ArticleFormData): void {
    this.articleService.createArticle(data);
  }

  deleteArticle(article: Article): void {
    this.articleService.deleteArticle(article);
  }
}
