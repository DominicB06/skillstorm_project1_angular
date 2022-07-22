import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-inventory-update',
  templateUrl: './inventory-update.component.html',
  styleUrls: ['./inventory-update.component.css'],
  providers: [MessageService]
})
export class InventoryUpdateComponent implements OnInit {

  inventoryApi: InventoryApiService
  inventory: Inventory

  @Input() vaultId: number = 0

  constructor(inventoryApi: InventoryApiService, private message: MessageService) { 
    this.inventoryApi = inventoryApi
    this.inventory = new Inventory
  }

  ngOnInit(): void {
  }

  update(inventory: Inventory){

    inventory.vaultID = this.vaultId
    this.inventoryApi.update(inventory).subscribe(result => {
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
