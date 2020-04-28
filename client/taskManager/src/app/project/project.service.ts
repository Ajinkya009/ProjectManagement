import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private router:Router, private http:HttpClient) { }

  fetchProjectDetails(projectId){
    return this.http.get(`/api/project/${projectId}/`);
  }

  createNewTask(name,description,startDate,endDate,assignee,projectId){
    
    return this.http.post(`/api/project/${projectId}/task/`,{
      name:name,
      description:description,
      startDate:startDate,
      endDate:endDate,
      assignee:assignee,
      project:projectId
    });
  }

  updateProject(projectData){
    
    return this.http.put(`/api/project/${projectData.id}/`,projectData);
  }

}
