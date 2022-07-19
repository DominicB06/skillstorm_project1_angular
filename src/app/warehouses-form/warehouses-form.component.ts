import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';

@Component({
  selector: 'app-warehouses-form',
  templateUrl: './warehouses-form.component.html',
  styleUrls: ['./warehouses-form.component.css']
})
export class WarehousesFormComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouse: Warehouse

  constructor(warehouseApi: WarehousesApiService) {
    this.warehouseApi = warehouseApi
    this.warehouse = new Warehouse()
   }

  ngOnInit(): void {
  }

  save(warehouse: Warehouse){

    this.warehouseApi.save(warehouse).subscribe(result => {
      console.log(result)
    })
  }

}
