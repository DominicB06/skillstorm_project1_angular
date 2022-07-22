import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';

@Component({
  selector: 'app-warehouses-update',
  templateUrl: './warehouses-update.component.html',
  styleUrls: ['./warehouses-update.component.css'],
  providers: [MessageService]
})
export class WarehousesUpdateComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouse: Warehouse

  @Input() warehouseId:number = 0

  constructor(warehouseApi: WarehousesApiService, private message: MessageService) {
    this.warehouseApi = warehouseApi
    this.warehouse = new Warehouse()
   }

  ngOnInit(): void {
  }

  update(warehouse: Warehouse){
    console.log(warehouse)
    warehouse.warehouseID = this.warehouseId
    this.warehouseApi.update(warehouse).subscribe(result => {
    console.log(result)
    },
    error => {
      this.toastFail()
    },
    () => {
      this.toastSuccess()
    })
  }

  toastSuccess(){
    this.message.add({severity:'success', detail:'Update Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Update Failed'});
  }

}
