import { Component, Input, OnInit } from '@angular/core';
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
  @Input() vaultId = 0

  constructor(itemApi: ItemsApiService) { 
    this.itemApi = itemApi
  }

  ngOnInit(): void {
      this.itemApi.findByVaultId(this.vaultId).subscribe(resp => {
        this.items = resp
      })
  }
}
