import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { By } from '@angular/platform-browser';
import { WordsCountPipe } from '../words-count.pipe';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent, WordsCountPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
  });

  fit(`displays article's title and text`, () => {
    component.article = {
      title: 'My title',
      text: 'Hello'
    } as any;

    const title = fixture.debugElement.query(By.css('[data-test-article="title"]'));
    const text = fixture.debugElement.query(By.css('.text'));
    fixture.detectChanges();
    expect(title.nativeElement.textContent).toContain('My title');
    expect(text.nativeElement.textContent).toBe('Hello');
  });
});
