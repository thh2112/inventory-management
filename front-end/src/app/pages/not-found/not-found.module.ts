import { NotFoundRoutingModule } from '@/pages/not-found/not-found-routing.module.ts';
import { NotFoundComponent } from '@/pages/not-found/not-found.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [NotFoundRoutingModule],
})
export class NotFoundModule {}
