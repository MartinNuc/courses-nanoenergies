import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-zupa-counter',
  templateUrl: './zupa-counter.component.html',
  styleUrls: ['./zupa-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZupaCounterComponent implements OnInit {
  counter = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  inc(): void {
    this.counter++;
    this.cd.detectChanges();
  }

  dec(): void {
    this.counter--;
    this.cd.detectChanges();
  }
}
