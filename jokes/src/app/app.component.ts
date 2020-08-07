import { Component } from '@angular/core';
import { JokeService } from './joke.service';
import { map, switchMap, debounceTime, startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonClicked = new Subject();
  joke$ = this.buttonClicked.pipe(
    startWith(1),
    switchMap(() => this.jokeService.fetchRandomJoke()),
    map(jokeResponse => jokeResponse.value)
  );

  constructor(private jokeService: JokeService) {}

  loadNext(): void {
    this.buttonClicked.next();
  }
}
