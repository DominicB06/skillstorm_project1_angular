import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ItemsApiService } from '../items-api.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-items-save',
  templateUrl: './items-save.component.html',
  styleUrls: ['./items-save.component.css'],
  providers: [MessageService]
})
export class ItemsSaveComponent implements OnInit {

  itemApi: ItemsApiService
  item: Item

  @Input() vaultId = 0

  constructor(itemApi: ItemsApiService, private message: MessageService) { 
    this.itemApi = itemApi
    this.item = new Item
  }

  ngOnInit(): void {
  }

  save(item: Item){
    item.vaultID = this.vaultId
    this.itemApi.save(item).subscribe(result => {
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
    this.message.add({severity:'success', detail:'Save Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Save Failed'});
  }
}
