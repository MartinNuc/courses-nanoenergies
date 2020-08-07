import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnDestroy, OnInit {

  subj = new Subject();
  subscription?: Subscription;
  constructor() {
    const stary = {};

    const novy = {
      ...stary
    };
   }

  ngOnInit(): void {
    this.subscription = this.subj.subscribe(val => console.log(val));
  }

  emit(): void {
    this.subj.next(Math.random());
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
