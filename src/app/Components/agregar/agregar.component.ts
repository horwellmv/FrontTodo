import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/Model/tareaModel';
import { TareaService } from 'src/app/Services/tarea.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nuevaTarea: Tarea={id:"",tarea:"",responsable:"",activa:false}; //Para trabajar la instancia desde el html 

  constructor(private tareaService:TareaService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarTarea(){
    this.tareaService.newTarea(this.nuevaTarea).subscribe(
      res=>{console.log(res); 
            this.router.navigate(['/home']);},
      err=>{console.log(err);}
    );
  }


}
