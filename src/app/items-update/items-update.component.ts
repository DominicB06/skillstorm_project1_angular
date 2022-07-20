import { Component, OnInit } from '@angular/core';
import { ItemsApiService } from '../items-api.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-items-update',
  templateUrl: './items-update.component.html',
  styleUrls: ['./items-update.component.css']
})
export class ItemsUpdateComponent implements OnInit {

  itemApi: ItemsApiService
  item: Item

  constructor(itemApi: ItemsApiService) { 
    this.itemApi = itemApi
    this.item = new Item
  }

  ngOnInit(): void {
  }

  update(item: Item){
    this.itemApi.update(item).subscribe(result => {
      console.log(result)
    })
  }

}
