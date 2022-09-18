import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/Model/tareaModel';
import { TareaService } from 'src/app/Services/tarea.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  id:string="xxx";
  tareaEditada: Tarea={id:"", tarea:"", responsable:"", activa:false};

  constructor(private tareaService:TareaService, private router:Router , private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id=this.activateRoute.snapshot.params["id"];
    

    this.tareaService.getUnaTarea(this.id).subscribe(
      res=>{this.tareaEditada=res, console.log(this.id+ "  Si está funcionando el metodo getUnaTarea(id)")},
      err=>console.log(err+" Algo no funciona en metodo getUnaTarea(id)")
    );
    
  }

  editarTarea(){
    this.tareaService.editTarea(this.id, this.tareaEditada).subscribe(
      res=>{console.log(res), this.router.navigate(['/home'])},
      err=>{console.log(err);}
    );
  }

}
