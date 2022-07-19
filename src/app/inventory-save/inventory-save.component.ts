import { Component, OnInit } from '@angular/core';
import { InventoryApiService } from '../inventory-api.service';
import { Inventory } from '../models/Inventory';
import { Item } from '../models/Item';

@Component({
  selector: 'app-inventory-save',
  templateUrl: './inventory-save.component.html',
  styleUrls: ['./inventory-save.component.css']
})
export class InventorySaveComponent implements OnInit {

  inventoryApi: InventoryApiService
  inventory: Inventory
  items: Array<Item> = []
  tempItem: Item

  constructor(inventoryApi: InventoryApiService) { 
    this.inventoryApi = inventoryApi
    this.inventory = new Inventory
    this.tempItem = new Item
  }

  ngOnInit(): void {
  }

  addItem(item: Item){
    item.vaultID = 
    this.items.push(item)
  }

  save(inventory: Inventory, items: Array<Item>){

    this.inventoryApi.save(inventory).subscribe(result => {
      console.log(result)
    })

    items.forEach(element => {
      this.inventoryApi.saveItems(element).subscribe(result =>{
        console.log(result)
      })
    });
    

  }

}
