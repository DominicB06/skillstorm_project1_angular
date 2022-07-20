import { Component, OnInit } from '@angular/core';
import { InventoryApiService } from '../inventory-api.service';

@Component({
  selector: 'app-inventory-delete',
  templateUrl: './inventory-delete.component.html',
  styleUrls: ['./inventory-delete.component.css']
})
export class InventoryDeleteComponent implements OnInit {

  inventoryApi: InventoryApiService
  id:number = 0

  constructor(inventoryApi: InventoryApiService) { 
    this.inventoryApi = inventoryApi
  }

  ngOnInit(): void {
  }

  deleteInventory(id:number){
    this.inventoryApi.delete(id).subscribe(result => {
      console.log(result)
    })
  }

}
