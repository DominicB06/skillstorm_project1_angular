import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-inventory-save',
  templateUrl: './inventory-save.component.html',
  styleUrls: ['./inventory-save.component.css']
})
export class InventorySaveComponent implements OnInit {

  inventoryApi: InventoryApiService
  inventory: Inventory

  // get the warehouse Id when the overlay is toggled from warehouse-form
  @Input() warehouseId:number = 0

  constructor(inventoryApi: InventoryApiService) { 
    this.inventoryApi = inventoryApi
    this.inventory = new Inventory
  }

  ngOnInit(): void {
  }

  save(inventory: Inventory){
    inventory.warehouse = this.warehouseId
    console.log(inventory)
    this.inventoryApi.save(inventory).subscribe(result => {
      console.log(result)
    })
  }

 

}
