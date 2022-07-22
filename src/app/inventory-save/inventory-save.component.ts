import { Component, Input, OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-inventory-save',
  templateUrl: './inventory-save.component.html',
  styleUrls: ['./inventory-save.component.css'],
  providers: [MessageService]
})
export class InventorySaveComponent implements OnInit {

  inventoryApi: InventoryApiService
  inventory: Inventory
  success: boolean = false
  // get the warehouse Id when the overlay is toggled from warehouse-form
  @Input() warehouseId:number = 0

  constructor(inventoryApi: InventoryApiService, private message: MessageService) { 
    this.inventoryApi = inventoryApi
    this.inventory = new Inventory
  }

  ngOnInit(): void {
  }

  save(inventory: Inventory){
    inventory.warehouse = this.warehouseId
    this.inventoryApi.save(inventory).subscribe(result => {
      console.log(result) 
    },
    error => {
      this.toastFail()
    },
    () => {
      this.toastSuccess()
    });
    

   

  }

  toastSuccess(){
    this.message.add({severity:'success', detail:'Save Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Save Failed'});
  }

}
