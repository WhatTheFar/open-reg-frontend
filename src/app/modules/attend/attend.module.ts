import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendRoutingModule } from './attend-routing.module';
import { AttendComponent } from './attend.component';
import { NzListModule, NzResultModule, NzButtonModule } from 'ng-zorro-antd';
import { AttendSuccessComponent } from './attend-success/attend-success.component';

@NgModule({
  declarations: [AttendComponent, AttendSuccessComponent],
  imports: [
    CommonModule,
    AttendRoutingModule,
    NzListModule,
    NzResultModule,
    NzButtonModule,
  ],
})
export class AttendModule {}
