import { Component, OnInit, NgModule,ChangeDetectionStrategy } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter,CalendarEvent, CalendarView } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Subject } from 'rxjs';
import { colors } from '../../layouts/demo-utils/colors';

declare var google: any;


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
  moduleId: module.id,
  // selector: 'app-kalendrier',
  selector: 'app-mwl-demo-component',
  templateUrl: './kalendrier.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./kalendrier.component.scss']
})
export class KalendrierComponent implements OnInit {

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
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}





