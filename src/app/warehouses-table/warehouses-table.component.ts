import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core'
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';



@Component({
  selector: 'app-warehouses-table',
  templateUrl: './warehouses-table.component.html',
  styleUrls: ['./warehouses-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WarehousesTableComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouses: Array<Warehouse> = []
  warehouseId: number = 0

  displayAddWarehouse: boolean = false
  displayUpdateWarehouse: boolean = false
  displayDeleteWarehouse: boolean = false

  displayAddVault: boolean = false
  displayEditVault: boolean = false
  displayDeleteVault: boolean = false

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
    console.log(this.warehouseId)
  }

  deleteWarehouse(){

  }

  saveWarehouse(){

  }

  updateWarehouse(){

  }

  showInventorySaveDialog(id: number){
    this.displayAddVault = true
    this.warehouseId = id
    console.log(this.warehouseId)
  }

  showWarehouseUpdateDialog(id: number){
    this.displayUpdateWarehouse = true
    this.warehouseId = id
    console.log(this.warehouseId)
  }

}
