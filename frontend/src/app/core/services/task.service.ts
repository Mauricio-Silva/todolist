import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTaskDto, TaskDto, UpdateTaskDto } from "../models/task";

const baseUrl: string = 'http://localhost:3000/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}


  public create(task: CreateTaskDto): Observable<TaskDto> {
    return this.http.post<TaskDto>(baseUrl, task);
  }


  public findAll(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(baseUrl.concat('/list'));
  }


  public findOneById(id: string): Observable<TaskDto> {
    return this.http.get<TaskDto>(baseUrl.concat('/', id));
  }


  public findOneByDescription(description: string): Observable<TaskDto> {
    return this.http.get<TaskDto>(baseUrl.concat('/description/', description));
  }


  public update(id: string, task: UpdateTaskDto): Observable<TaskDto> {
    return this.http.patch<TaskDto>(baseUrl.concat('/', id), task);
  }


  public delete(id: string): Observable<TaskDto> {
    return this.http.delete<TaskDto>(baseUrl.concat('/', id));
  }


  public changeStatus(data: any, status: string): Observable<TaskDto> {
    const task: TaskDto = data;
    const updateTask: UpdateTaskDto = { description: task.description, status: status }
    return this.http.patch<TaskDto>(baseUrl.concat('/', task.id), updateTask);
  }
}
