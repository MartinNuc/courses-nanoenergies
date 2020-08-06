import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zupa-counter',
  templateUrl: './zupa-counter.component.html',
  styleUrls: ['./zupa-counter.component.css'],
})
export class ZupaCounterComponent implements OnInit {
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  inc(): void {
    this.counter++;
  }

  dec(): void {
    this.counter--;
  }
}
