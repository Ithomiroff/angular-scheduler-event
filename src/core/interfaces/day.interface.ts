import { IEvent } from 'src/core/interfaces/event';

export interface IDay {
  fullDate: Date;
  eventFired: boolean;
  fromOtherMonth: boolean;
  events: IEvent[];
}
