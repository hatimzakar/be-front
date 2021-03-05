import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Person} from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  private baseUrl='http://127.0.0.1:8000/api/person';

  constructor(private http:HttpClient) { }

  getPersons():Observable<Person[]>
  {

    return this.http.get<Person[]>(`${this.baseUrl}`);  
  }

  add(person:Person):Observable<any>
  {
      return this.http.post(`${this.baseUrl}`,person);
  }

  getByid(id:number):Observable<Person>
  {
      return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  update(id:number,person:Person):Observable<Person>
  {
    return this.http.put<Person>(`${this.baseUrl}/${id}`,person)
  }

  delete(id:number):Observable<Person>
  {
    return this.http.delete<Person>(`${this.baseUrl}/${id}`);
  }
}
