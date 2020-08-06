import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export type ArticleFormData = {
  title: string
  text: string
  author: {
    name: string;
    email: string;
  }
};

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  @Output()
  save = new EventEmitter<ArticleFormData>();

  articleForm = this.fb.group({
    title: [],
    text: [],
    author: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.save.emit(this.articleForm.value);
    this.articleForm.reset();
    this.articleForm.get('author.email')?.markAsPristine();
  }
}
