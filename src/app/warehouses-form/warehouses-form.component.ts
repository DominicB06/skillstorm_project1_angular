import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';

@Component({
  selector: 'app-warehouses-form',
  templateUrl: './warehouses-form.component.html',
  styleUrls: ['./warehouses-form.component.css'],
  providers: [MessageService]
})
export class WarehousesFormComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouse: Warehouse

  constructor(warehouseApi: WarehousesApiService, private message: MessageService) {
    this.warehouseApi = warehouseApi
    this.warehouse = new Warehouse()
   }

  ngOnInit(): void {
  }

  save(warehouse: Warehouse){

    this.warehouseApi.save(warehouse).subscribe(result => {
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
    this.message.add({severity:'success', detail:'Creation Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Creation Failed'});
  }

}
