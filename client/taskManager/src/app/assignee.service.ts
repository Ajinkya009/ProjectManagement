import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssigneeService {
  constructor(private http:HttpClient) { }

  fetchAllAssignees(){

    return this.http.get('/api/auth/');
  }
}
