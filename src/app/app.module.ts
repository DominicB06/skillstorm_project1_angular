import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {Card, CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehousesTableComponent } from './warehouses-table/warehouses-table.component';
import { FormsModule } from '@angular/forms';
import { WarehousesFormComponent } from './warehouses-form/warehouses-form.component';
import { WarehousesUpdateComponent } from './warehouses-update/warehouses-update.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventorySaveComponent } from './inventory-save/inventory-save.component';
import { InventoryUpdateComponent } from './inventory-update/inventory-update.component';
import { ItemsReadComponent } from './items-read/items-read.component';
import { ItemsSaveComponent } from './items-save/items-save.component';
import { ItemsUpdateComponent } from './items-update/items-update.component';


@NgModule({
  declarations: [
    AppComponent,
    WarehousesTableComponent,
    WarehousesFormComponent,
    WarehousesUpdateComponent,
    InventoryTableComponent,
    InventorySaveComponent,
    InventoryUpdateComponent,
    ItemsReadComponent,
    ItemsSaveComponent,
    ItemsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    FontAwesomeModule,
    ButtonModule,
    ImageModule,
    CardModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
