import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarHeaderComponent implements OnInit {

  @Input()
  set currentMonth(value: number) {
    this.month = this.i18nList[value];
  }

  protected month: string;

  @Output() changeMonth = new EventEmitter<buttonMode>();

  constructor() {
  }

  ngOnInit() {
  }

  get i18nList(): string[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  }

}


export type buttonMode = 'next' | 'prev';
