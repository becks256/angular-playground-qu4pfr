import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-group-table',
  styleUrls: ['./radio-group-table.component.scss'],
  templateUrl: './radio-group-table.component.html',
})
export class RadioGroupTableComponent {
  ItemsArray: any[] = [];
  constructor() {}
  ngOnInit() {
    this.ItemsArray = [
      {
        division: `01 - Foo`,
        '4-week': 5,
        '8-week': 4.05,
        '12-week': 4.1,
        '16-week': 5,
      },
      {
        division: `02 - Bar`,
        '4-week': 6,
        '8-week': 5.05,
        '12-week': 5.1,
        '16-week': 6,
      },
      {
        division: `03 - Baz`,
        '4-week': 7,
        '8-week': 6.05,
        '12-week': 6.1,
        '16-week': 7,
      },
    ];
  }
}
