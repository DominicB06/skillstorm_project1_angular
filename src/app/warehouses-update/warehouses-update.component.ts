import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';

@Component({
  selector: 'app-warehouses-update',
  templateUrl: './warehouses-update.component.html',
  styleUrls: ['./warehouses-update.component.css']
})
export class WarehousesUpdateComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouse: Warehouse

  constructor(warehouseApi: WarehousesApiService) {
    this.warehouseApi = warehouseApi
    this.warehouse = new Warehouse()
   }

  ngOnInit(): void {
  }

  update(warehouse: Warehouse){

    this.warehouseApi.update(warehouse).subscribe(result => {
      console.log(result)
    })
  }

}
