import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Inventory } from './models/Inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  http: HttpClient
  baseUrl: string = "http://localhost:8080/project1/inventory/"
  itemsUrl: string = "http://localhost:8080/project1/itemdetails/"

  constructor(http: HttpClient) { 
    this.http = http
  }

  findByWarehouse(warehouseId: number): Observable<any>{
    let params = new HttpParams().set("id", warehouseId)
    return this.http.get(this.baseUrl, {params: params}).pipe(catchError(this.handleError))
  }

  findUsage(warehouseId: number): Observable<any>{
    let params = new HttpParams().set("usageId", warehouseId)
    return this.http.get(this.baseUrl, {params: params}).pipe(catchError(this.handleError))
  }

  save(inventory: Inventory): Observable<any>{
    return this.http.post(this.baseUrl, inventory).pipe(catchError(this.handleError))
  }

  update(inventory: Inventory): Observable<any>{
    return this.http.put(this.baseUrl, inventory).pipe(catchError(this.handleError))
  } 

  delete(id: number): Observable<any>{
    let params = new HttpParams().set("id", id)
    //if we delete a vault also delete all items in that vault
    //this.http.delete(this.itemsUrl, {params: params}).pipe(catchError(this.handleError))
    return this.http.delete(this.baseUrl, {params: params}).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error() 
    })
  }
}
