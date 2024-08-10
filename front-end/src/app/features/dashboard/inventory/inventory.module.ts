import { NgModule } from '@angular/core';
import { InventoryComponent } from '@/features/inventory/inventory.component';
import { InventoryRoutingModule } from '@/features/inventory/inventory-routing.module';

@NgModule({
  declarations: [InventoryComponent],
  imports: [InventoryRoutingModule],
  exports: [],
})
export class InventoryModule {}
