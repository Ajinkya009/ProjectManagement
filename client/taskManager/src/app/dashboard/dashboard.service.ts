import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private http:HttpClient) {}

  fetchAllProjects(){
    return this.http.get('/api/project/');
  }

  createNewProject(name,description,startDate,endDate){
    return this.http.post('/api/project/',{
      name:name,
      description:description,
      startDate:startDate,
      endDate:endDate
    });
  }

}
