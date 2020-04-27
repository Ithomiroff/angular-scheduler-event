import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IDay } from 'src/core/interfaces/day.interface';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayComponent implements OnInit {


  @Input() day: IDay;

  constructor() {
  }

  ngOnInit() {
  }

}
