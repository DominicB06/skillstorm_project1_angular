import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorySaveComponent } from './inventory-save/inventory-save.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventoryUpdateComponent } from './inventory-update/inventory-update.component';
import { ItemsReadComponent } from './items-read/items-read.component';
import { ItemsSaveComponent } from './items-save/items-save.component';
import { ItemsUpdateComponent } from './items-update/items-update.component';
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
  path:'update-warehouse',
  component: WarehousesUpdateComponent
},{
  path:'find-inventory',
  component: InventoryTableComponent
},{
  path:'save-inventory',
  component: InventorySaveComponent
},{
  path:'update-inventory', 
  component: InventoryUpdateComponent
},{
  path:'read-items',
  component: ItemsReadComponent
},{
  path:'save-items',
  component: ItemsSaveComponent
},{
  path:'update-items',
  component: ItemsUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
