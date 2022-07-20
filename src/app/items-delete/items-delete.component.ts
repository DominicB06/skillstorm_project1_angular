import { Component, OnInit } from '@angular/core';
import { ItemsApiService } from '../items-api.service';

@Component({
  selector: 'app-items-delete',
  templateUrl: './items-delete.component.html',
  styleUrls: ['./items-delete.component.css']
})
export class ItemsDeleteComponent implements OnInit {

  itemApi: ItemsApiService
  serialNum: number = 0

  constructor(itemApi: ItemsApiService) { 
    this.itemApi = itemApi
  }

  ngOnInit(): void {
  }

  deleteItem(serialNum: number){
    this.itemApi.delete(serialNum).subscribe(result => {
      console.log(result)
    })
  }

}
