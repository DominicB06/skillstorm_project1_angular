import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
  providers: [MessageService]
})
export class InventoryTableComponent implements OnInit {

  inventory: Array<Inventory> = []
  inventoryApi: InventoryApiService
  vaultId:number = 0

  displayAddVault: boolean = false
  displayEditVault: boolean = false

  @Input() warehouseId = 0
  
  constructor(invenroyApi: InventoryApiService, private message: MessageService) { 
    this.inventoryApi = invenroyApi
  }

  ngOnInit(): void {
    this.findVaults()
    this.inventoryApi.Refreshrequired.subscribe(resp => {
      this.findVaults()
    })
  }

  findVaults(){
    this.inventoryApi.findByWarehouse(this.warehouseId).subscribe(resp => {
      this.inventory = resp
    })
  }

  setVaultId(vaultId: number){
    this.vaultId = vaultId
  }

  deleteInventory(id:number){
    this.inventoryApi.delete(id).subscribe(result => {
      console.log(result)
    },
    error => {
      this.toastFail()
    },
    () => {
      this.toastSuccess()
    })
  }

  showSaveInventory(){
    this.displayAddVault = true
  }

  showEditInventory(id: number){
    this.vaultId = id
    this.displayEditVault = true
  }

  toastSuccess(){
    this.message.add({severity:'success', detail:'Delete Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Delete Failed'});
  }

}
