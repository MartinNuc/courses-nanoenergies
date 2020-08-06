import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { WordsCountPipe } from './words-count.pipe';
import { ColoredButtonsComponent } from './colored-buttons/colored-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleCountComponent } from './article-count/article-count.component';
import { ZupaCounterComponent } from './zupa-counter/zupa-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    WordsCountPipe,
    ColoredButtonsComponent,
    ArticleFormComponent,
    ArticleCountComponent,
    ZupaCounterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
