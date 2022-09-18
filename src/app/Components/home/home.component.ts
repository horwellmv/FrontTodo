import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/Services/tarea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tareaService:TareaService) { }

  listaTareas:any=[];
  

  ngOnInit(): void {
    this.listarTareas();
  }

  listarTareas(){
    this.tareaService.getTareas().subscribe(
      res=>{this.listaTareas=res, console.log(res);},
      err=>{console.log(err);}
    );
  }

  eliminarTarea(id:string){
    this.tareaService.deleteTarea(id).subscribe(
      res=>{console.log(res, "Eliminacion correcta tarea id:"+id, this.ngOnInit())},
      err=>{console.log(err)}
    );
  }

}
