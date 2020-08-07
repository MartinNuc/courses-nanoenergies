import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  fetchRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
  }

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://api.chucknorris.io/jokes/categories');
  }

  fetchJokeFromCategory(category: string): Observable<Joke> {
    return this.http.get<Joke>(`https://api.chucknorris.io/jokes/random?category=${category}`);
  }
}
