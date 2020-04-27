import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    CalendarComponent,
    DayComponent,
    CalendarHeaderComponent,
    EventComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarComponent,
  ]
})
export class CalendarModule { }

