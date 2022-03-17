import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { ContextMenuModule } from 'ngx-contextmenu';
import { DemoUtilsModule } from '../demo-utils/module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { KalendrierComponent } from '../../pages/kalendrier/kalendrier.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [KalendrierComponent],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
    // BrowserAnimationsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    DemoUtilsModule,
  ],
  declarations: [
    DashboardComponent,
    KalendrierComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule {}
