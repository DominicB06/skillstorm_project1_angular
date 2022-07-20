import { Component, OnInit } from '@angular/core';
import { ItemsApiService } from '../items-api.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-items-read',
  templateUrl: './items-read.component.html',
  styleUrls: ['./items-read.component.css']
})
export class ItemsReadComponent implements OnInit {

  items: Array<Item> = []
  itemApi: ItemsApiService
  vaultId: number = 0

  constructor(itemApi: ItemsApiService) { 
    this.itemApi = itemApi
  }

  ngOnInit(): void {
  }

  find(vaultId: number){

    this.itemApi.findByVaultId(vaultId).subscribe(resp => {
      this.items = resp
    })
  }
}
