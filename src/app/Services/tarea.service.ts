import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../Model/tareaModel';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  url="http://localhost:8080/tarea/";
  constructor( private http: HttpClient) { }

  getTareas():Observable<any>{
    return this.http.get(this.url+"get");
  }

  getUnaTarea(id:string):Observable<any>{
    return this.http.get(this.url+id);
  }

  editTarea(id: string, tarea:Tarea):Observable<any>{
    return this.http.put(this.url+id, tarea);
  }

  newTarea(tarea:Tarea):Observable<any>{
    return this.http.post(this.url+"save", tarea);
  }
  
  deleteTarea(id:String):Observable<any>{
    return this.http.delete(this.url+id);
  }
}
