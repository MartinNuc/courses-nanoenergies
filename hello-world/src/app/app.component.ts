import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Article } from './models/article';
import { ArticleFormData } from './article-form/article-form.component';
import { ArticleService } from './article.service';
import {
  Observable,
  BehaviorSubject,
  ReplaySubject,
  pipe,
  Subject,
} from 'rxjs';
import { map, filter, skip, take, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isDropdownOpened = false;

  @ViewChild('dropdownElement')
  set dropdownElement(element: ElementRef<HTMLDivElement>) {
    console.log(element ? 'rendered' : 'destoyed');
  }

  constructor(public articleService: ArticleService) {

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
