import { Component, OnInit } from '@angular/core';
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
  warehouseId: number = 0

  constructor(invenroyApi: InventoryApiService) { 
    this.inventoryApi = invenroyApi
  }

  ngOnInit(): void {
  }

  find(warehouseId: number){

    this.inventoryApi.findByWarehouse(warehouseId).subscribe(resp => {
      this.inventory = resp
    })
  }

}
