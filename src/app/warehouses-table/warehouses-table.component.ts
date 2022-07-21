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

  saveWarehouse(){

  }

  updateWarehouse(){

  }

  showEditWarehouse(warehouseId :number){
    this.warehouseId = warehouseId
    this.displayUpdateWarehouse = true
    console.log(this.warehouseId)
  }

  showAddWarehouse(){
    this.displayAddWarehouse = true
  }

  deleteWarehouse(warehouseId: number){

    this.warehouseApi.delete(warehouseId).subscribe(result => {
      console.log(result)
    })

  }

}
