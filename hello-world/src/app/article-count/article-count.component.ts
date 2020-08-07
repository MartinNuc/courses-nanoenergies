import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ArticleService } from '../article.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-count',
  templateUrl: './article-count.component.html',
  styleUrls: ['./article-count.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCountComponent implements OnInit {

  articleCount$ = this.articleService.articles$.pipe(map(x => x.length));

  constructor(
    public articleService: ArticleService,
    public cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  rerender(): void {
    this.cd.detectChanges();
  }
}
