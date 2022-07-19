import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehousesTableComponent } from './warehouses-table/warehouses-table.component';
import { FormsModule } from '@angular/forms';
import { WarehousesFormComponent } from './warehouses-form/warehouses-form.component';
import { WarehousesDeleteComponent } from './warehouses-delete/warehouses-delete.component';
import { WarehousesUpdateComponent } from './warehouses-update/warehouses-update.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventorySaveComponent } from './inventory-save/inventory-save.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehousesTableComponent,
    WarehousesFormComponent,
    WarehousesDeleteComponent,
    WarehousesUpdateComponent,
    InventoryTableComponent,
    InventorySaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
