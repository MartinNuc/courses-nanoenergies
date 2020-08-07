import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, distinctUntilChanged, map, startWith, shareReplay } from 'rxjs/operators';
import { Subject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent implements OnInit {

  reloadButton$ = new Subject<void>();
  reload$ = this.reloadButton$.pipe(startWith(1));
  category$ = this.route.params.pipe(
    map((params) => params.category as string),
    distinctUntilChanged()
  );

  joke$ = combineLatest([
    this.category$,
    this.reload$
  ]).pipe(
    switchMap(([category]) => this.jokeService.fetchJokeFromCategory(category)),
    map(response => response.value),
    shareReplay(1)
  );

  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService
  ) {}

  ngOnInit(): void {}

  loadNext(): void {
    this.reloadButton$.next();
  }
}
