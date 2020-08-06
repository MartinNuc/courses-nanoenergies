import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colored-buttons',
  templateUrl: './colored-buttons.component.html',
  styleUrls: ['./colored-buttons.component.css']
})
export class ColoredButtonsComponent implements OnInit {

  componentStyle = {
    'bigger-size': false,
    red: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleColor(): void {
    this.componentStyle = {
      ...this.componentStyle,
      red: !this.componentStyle.red
    };
  }

  toggleSize(): void {
    this.componentStyle['bigger-size'] = !this.componentStyle['bigger-size'];
  }

}
