import { Component, OnInit, NgModule,ChangeDetectionStrategy } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter,CalendarEvent, CalendarView } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Subject } from 'rxjs';
import { colors } from '../../layouts/demo-utils/colors';

declare var google: any;




@Component({
  moduleId: module.id,
  selector: 'app-kalendrier',
  templateUrl: './kalendrier.component.html',
  styleUrls: ['./kalendrier.component.scss']
})
export class KalendrierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class MyModule {}



@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'kalendrier.component.html',
  styles: [
    `
      .fill-height {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
    `,
  ],
})
export class DemoComponent {
  view: CalendarView = CalendarView.Month;

  viewDate = new Date();

  events: CalendarEvent[] = [];

  refresh = new Subject<void>();

  addEvent(date: Date): void {
    this.events.push({
      start: date,
      title: 'New event',
      color: colors.red,
    });
    this.refresh.next();
  }
}
