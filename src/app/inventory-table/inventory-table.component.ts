import { Component, Input, OnInit } from '@angular/core';
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent implements OnInit {

  inventory: Array<Inventory> = []
  inventoryApi: InventoryApiService
  vaultId:number = 0
  displayAddVault: boolean = false

  @Input() warehouseId = 0
  
  constructor(invenroyApi: InventoryApiService) { 
    this.inventoryApi = invenroyApi
  }

  ngOnInit(): void {
    console.log("inventory initialized " + this.warehouseId)
    this.inventoryApi.findByWarehouse(this.warehouseId).subscribe(resp => {
      this.inventory = resp
    })
  }

  setVaultId(vaultId: number){
    this.vaultId = vaultId
  }

  showInventorySaveDialog(){
    this.displayAddVault = true
    console.log(this.warehouseId)
  }

}
