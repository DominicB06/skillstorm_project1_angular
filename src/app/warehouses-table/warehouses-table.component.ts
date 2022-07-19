import { Component, OnInit } from '@angular/core'
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';


@Component({
  selector: 'app-warehouses-table',
  templateUrl: './warehouses-table.component.html',
  styleUrls: ['./warehouses-table.component.css']
})
export class WarehousesTableComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouses: Array<Warehouse> = []

  constructor(warehousesApi: WarehousesApiService) { 
    this.warehouseApi = warehousesApi
  }

  ngOnInit(): void {
    this.warehouseApi.findAll().subscribe(resp =>{
      this.warehouses = resp
    })
  }

}
