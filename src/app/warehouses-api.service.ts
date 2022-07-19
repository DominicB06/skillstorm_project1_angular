import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Warehouse } from './models/Warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehousesApiService {

  http: HttpClient
  baseUrl: string = "http://localhost:8080/project1/warehouses/"

  constructor(http: HttpClient) { 
    this.http = http
  }


  findAll(): Observable<any>{
    return this.http.get(this.baseUrl)
  }

  findById(id: number): Observable<any>{
    let params = new HttpParams().set("id", id)
    return this.http.get(this.baseUrl, {params: params}).pipe(catchError(this.handleError))
  }

  findByAddress(address: string): Observable<any>{
    let params = new HttpParams().set("address", address)
    return this.http.get(this.baseUrl, {params: params}).pipe(catchError(this.handleError))
  }

  save(warehouse: Warehouse): Observable<any>{
    return this.http.post(this.baseUrl, warehouse).pipe(catchError(this.handleError))
  }

  update(warehouse: Warehouse): Observable<any>{
    return this.http.put(this.baseUrl, warehouse).pipe(catchError(this.handleError))
  } 

  delete(id: number): Observable<any>{
    let params = new HttpParams().set("id", id)
    return this.http.delete(this.baseUrl, {params: params}).pipe(catchError(this.handleError))
  }


   private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error() 
    })
  }
}
