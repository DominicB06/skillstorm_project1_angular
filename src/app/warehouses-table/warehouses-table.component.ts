import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { MessageService } from 'primeng/api';
import { Warehouse } from '../models/Warehouse';
import { WarehousesApiService } from '../warehouses-api.service';



@Component({
  selector: 'app-warehouses-table',
  templateUrl: './warehouses-table.component.html',
  styleUrls: ['./warehouses-table.component.css'],
  providers: [MessageService]
})
export class WarehousesTableComponent implements OnInit {

  warehouseApi: WarehousesApiService
  warehouses: Array<Warehouse> = []
  warehouseId: number = 0


  displayAddWarehouse: boolean = false
  displayUpdateWarehouse: boolean = false


  constructor(warehousesApi: WarehousesApiService, private message: MessageService) { 
    this.warehouseApi = warehousesApi
  }

  ngOnInit(): void {
    this.findAllWarehouses()
    this.warehouseApi.Refreshrequired.subscribe(resp => {
      this.findAllWarehouses()
    })
  }

  findAllWarehouses(){
    this.warehouseApi.findAll().subscribe(resp =>{
    this.warehouses = resp
    })
  }

  setWarehouseId(id: number){
    this.warehouseId = id
    console.log(this.warehouseId)
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
    },
    error => {
      this.toastFail()
    },
    () => {
      this.toastSuccess()
    })

    this.ngOnInit()
    //window.location.reload()

  }

  toastSuccess(){
    this.message.add({severity:'success', detail:'Delete Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Delete Failed'});
  }
}
