import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$ = this.jokeService.fetchCategories();

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
  }

}
