import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/lists';

  constructor(private http: HttpClient) {}

  getLists(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Opérations CRUD similaires à celles du item.service.ts
}
