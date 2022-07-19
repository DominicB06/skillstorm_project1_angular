import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorySaveComponent } from './inventory-save/inventory-save.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { WarehousesDeleteComponent } from './warehouses-delete/warehouses-delete.component';
import { WarehousesFormComponent } from './warehouses-form/warehouses-form.component';
import { WarehousesTableComponent } from './warehouses-table/warehouses-table.component';
import { WarehousesUpdateComponent } from './warehouses-update/warehouses-update.component';

const routes: Routes = [{
  path:'list-warehouses',
  component: WarehousesTableComponent
},{
  path:'enter-warehouse',
  component: WarehousesFormComponent
},{
  path:'delete-warehouse',
  component: WarehousesDeleteComponent
},{
  path:'update-warehouse',
  component: WarehousesUpdateComponent
},{
  path:'find-inventory',
  component: InventoryTableComponent
},{
  path:'save-inventory',
  component: InventorySaveComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
