import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from '@/features/dashboard/dashboard-routing.module';
import { DashboardComponent } from '@/features/dashboard//dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}
