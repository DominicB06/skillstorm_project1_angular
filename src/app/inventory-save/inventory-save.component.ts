import { Component, OnInit } from '@angular/core';
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

  constructor(inventoryApi: InventoryApiService) { 
    this.inventoryApi = inventoryApi
    this.inventory = new Inventory
  }

  ngOnInit(): void {
  }

  save(inventory: Inventory){

    this.inventoryApi.save(inventory).subscribe(result => {
      console.log(result)
    })
  }

}
