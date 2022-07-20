import { Component, OnInit } from '@angular/core';
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-inventory-update',
  templateUrl: './inventory-update.component.html',
  styleUrls: ['./inventory-update.component.css']
})
export class InventoryUpdateComponent implements OnInit {

  inventoryApi: InventoryApiService
  inventory: Inventory

  constructor(inventoryApi: InventoryApiService) { 
    this.inventoryApi = inventoryApi
    this.inventory = new Inventory
  }

  ngOnInit(): void {
  }

  update(inventory: Inventory){

    this.inventoryApi.update(inventory).subscribe(result => {
      console.log(result)
    })
  }
}
