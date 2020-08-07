import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCountComponent } from './article-count.component';
import { ArticleService } from '../article.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('ArticleCountComponent', () => {
  let component: ArticleCountComponent;
  let fixture: ComponentFixture<ArticleCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCountComponent);
    component = fixture.componentInstance;
  });

  it('displays count of articles', () => {
    const articleService = TestBed.inject(ArticleService);
    const articlesSpy = spyOnProperty(articleService, 'articles$', 'get').and.returnValue(of([]));
    const countElement = fixture.debugElement.query(By.css('h1'));
    fixture.detectChanges();
    expect(articlesSpy).toHaveBeenCalledTimes(1);
    expect(countElement.nativeElement.textContent).toContain('0');
  });
});
