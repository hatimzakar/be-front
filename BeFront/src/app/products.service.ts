import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './Products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private baseUrl='http://127.0.0.1:8000/api/product';


  constructor(private http:HttpClient) { }

  getProducts():Observable<Products[]>
  {

    return this.http.get<Products[]>(`${this.baseUrl}`);  
  }
  add(products:Products):Observable<any>
  {
    return this.http.post(`${this.baseUrl}`,products);
  }

  getByid(id:number):Observable<Products>
  {
      return this.http.get<Products>(`${this.baseUrl}/${id}`);
  }

  update(id:number,product:Products):Observable<Products>
  {
    return this.http.put<Products>(`${this.baseUrl}/${id}`,product)
  }

  delete(id:number):Observable<Products>
  {
    return this.http.delete<Products>(`${this.baseUrl}/${id}`);
  }
  
}
