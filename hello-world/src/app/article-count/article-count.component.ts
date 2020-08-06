import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-count',
  templateUrl: './article-count.component.html',
  styleUrls: ['./article-count.component.css']
})
export class ArticleCountComponent implements OnInit {

  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
  }

  getCount(): number {
    return this.articleService.getArticles().length;
  }

}
