import { Component, OnInit } from '@angular/core';
import { ItemsApiService } from '../items-api.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-items-save',
  templateUrl: './items-save.component.html',
  styleUrls: ['./items-save.component.css']
})
export class ItemsSaveComponent implements OnInit {

  itemApi: ItemsApiService
  item: Item

  constructor(itemApi: ItemsApiService) { 
    this.itemApi = itemApi
    this.item = new Item
  }

  ngOnInit(): void {
  }

  save(item: Item){
    this.itemApi.save(item).subscribe(result => {
      console.log(result)
    })
  }

}
