import { Component, OnInit } from '@angular/core';
import { WarehousesApiService } from '../warehouses-api.service';

@Component({
  selector: 'app-warehouses-delete',
  templateUrl: './warehouses-delete.component.html',
  styleUrls: ['./warehouses-delete.component.css']
})
export class WarehousesDeleteComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouseId: number

  constructor(warehouseApi: WarehousesApiService) { 
    this.warehouseApi = warehouseApi
    this.warehouseId = 0
  }

  ngOnInit(): void {
  }

  deleteWarehouse(warehouseId: number){

    this.warehouseApi.delete(warehouseId).subscribe(result => {
      console.log(result)
    })

  }

}
