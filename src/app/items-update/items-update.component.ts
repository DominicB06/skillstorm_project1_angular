import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ItemsApiService } from '../items-api.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-items-update',
  templateUrl: './items-update.component.html',
  styleUrls: ['./items-update.component.css'],
  providers: [MessageService]
})
export class ItemsUpdateComponent implements OnInit {

  itemApi: ItemsApiService
  item: Item

  @Input() serialNum = 0

  constructor(itemApi: ItemsApiService, private message: MessageService) { 
    this.itemApi = itemApi
    this.item = new Item
  }

  ngOnInit(): void {
  }

  update(item: Item){

    console.log(item)
    item.serialNum = this.serialNum
    this.itemApi.update(item).subscribe(result => {
      console.log(result)
    },
    error => {
      this.toastFail()
    },
    () => {
      this.toastSuccess()
    })
  }

  toastSuccess(){
    this.message.add({severity:'success', detail:'Update Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Update Failed'});
  }

}
