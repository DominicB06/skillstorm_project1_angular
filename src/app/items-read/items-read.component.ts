import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ItemsApiService } from '../items-api.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-items-read',
  templateUrl: './items-read.component.html',
  styleUrls: ['./items-read.component.css'],
  providers: [MessageService]
})
export class ItemsReadComponent implements OnInit {

  items: Array<Item> = []
  itemApi: ItemsApiService
  @Input() vaultId = 0
  serialNum:number = 0

  displayAddItem = false
  displayEditItem = false

  constructor(itemApi: ItemsApiService, private message: MessageService) { 
    this.itemApi = itemApi
  }

  ngOnInit(): void {
    this.findItems()
    this.itemApi.Refreshrequired.subscribe(resp => {
      this.findItems()
    })
  }


  findItems(){
    this.itemApi.findByVaultId(this.vaultId).subscribe(resp => {
      this.items = resp
    })
  }

  showAddItem(){
    this.displayAddItem = true
  }

  showEditItem(serial: number){
    this.serialNum = serial
    this.displayEditItem = true
  }

  setVaultId(id: number){
    this.vaultId = id
  }

  deleteItem(serialNum: number){
    this.itemApi.delete(serialNum).subscribe(result => {
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
    this.message.add({severity:'success', detail:'Delete Success!'});
  }

  toastFail(){
    this.message.add({severity:'error', detail:'Delete Failed'});
  }
}
