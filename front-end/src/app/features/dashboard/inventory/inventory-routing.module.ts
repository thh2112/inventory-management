import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from '@/features/dashboard/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    data: {
      seoTitle: 'Inventory',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
