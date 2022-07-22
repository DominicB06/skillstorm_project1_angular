import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError, tap } from 'rxjs';
import { Item } from './models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  http: HttpClient
  baseUrl = "http://localhost:8080/project1/itemdetails/"

  private _refreshrequired = new Subject<void>();

  constructor(http: HttpClient) { 
    this.http = http
  }

  findByVaultId(id: number): Observable<any>{
    let params = new HttpParams().set("vaultID", id)
    return this.http.get(this.baseUrl, {params: params}).pipe(catchError(this.handleError))
  }
  
  save(item: Item): Observable<any>{
    return this.http.post(this.baseUrl, item).pipe(catchError(this.handleError)).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    )
  }

  delete(serialNum: number): Observable<any>{
    let params = new HttpParams().set("serialNum", serialNum)
    return this.http.delete(this.baseUrl, {params: params}).pipe(catchError(this.handleError)).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    )
  }

  update(item: Item): Observable<any>{
    return this.http.put(this.baseUrl, item).pipe(catchError(this.handleError)).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    )
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error() 
    })
  }

  get Refreshrequired(){
    return this._refreshrequired
  }
}
