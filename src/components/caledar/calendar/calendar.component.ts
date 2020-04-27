import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getMonthDays } from '../get-days.function';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDay } from 'src/core/interfaces/day.interface';
import { buttonMode } from '../calendar-header/calendar-header.component';
import { map } from 'rxjs/operators';
import EVENTS from '../events';
import { IEvent } from 'src/core/interfaces/event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  private readonly currentMonth$ = new BehaviorSubject<number>(0);

  private readonly currentDays$: Observable<IDay[]> = this.currentMonth$.pipe(
    map((value) => this.adapterDays(value))
  );

  constructor() {

    EVENTS.filter((e) => new Date(e.startDate) === new Date());
  }

  private adapterDays(currentMonthIndex: number): IDay[] {
    return getMonthDays(currentMonthIndex).map((day) => {
      return {
        fullDate: day,
        eventFired: false,
        fromOtherMonth: day.getMonth() !== currentMonthIndex,
        events: this.findEventByDate(day)
      };
    });
  }

  private findEventByDate(date: Date): any {
    return EVENTS.filter((event) => new Date(event.startDate).toLocaleDateString() === new Date(date).toLocaleDateString());
  }

  ngOnInit() {
    getMonthDays(0);
  }

  changeMonth($event: buttonMode) {
    let value = this.currentMonth$.getValue();
    if ($event === 'next') {
      if (value === 11) {
        value = 0;
      } else {
        value += 1;
      }
    } else {
      if (value === 0) {
        value = 11;
      } else {
        value -= 1;
      }
    }
    this.currentMonth$.next(value);
  }

  get week(): string[] {
    return [
      'Mon',
      'Thu',
      'Wen',
      'The',
      'Fri',
      'Sat',
      'Sun'
    ];
  }
}
