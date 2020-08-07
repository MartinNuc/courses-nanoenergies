import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {

  @Input()
  article?: Article;

  @Output()
  deleteArticle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClicked(): void {
    this.deleteArticle.emit();
  }
}
