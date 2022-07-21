import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core'
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';



@Component({
  selector: 'app-warehouses-table',
  templateUrl: './warehouses-table.component.html',
  styleUrls: ['./warehouses-table.component.css'],
})
export class WarehousesTableComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouses: Array<Warehouse> = []
  warehouseId: number = 0
  
  constructor(warehousesApi: WarehousesApiService) { 
    this.warehouseApi = warehousesApi
  }

  ngOnInit(): void {
    this.warehouseApi.findAll().subscribe(resp =>{
      this.warehouses = resp
    })
  }

  setWarehouseId(id: number){
    this.warehouseId = id
  }

}
