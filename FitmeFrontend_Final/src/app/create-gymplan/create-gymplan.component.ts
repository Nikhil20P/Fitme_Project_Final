import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {FitmeserviceService} from '../fitmeservice.service';

@Component({
  selector: 'app-create-gymplan',
  templateUrl: './create-gymplan.component.html',
  styleUrls: ['./create-gymplan.component.css']
})
export class CreateGymplanComponent implements OnInit {


gymplanCri={
  name:"",
  duration:""
}


  constructor(private gymservice:FitmeserviceService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  onCreate(){
    if(this.gymplanCri.name=="" || this.gymplanCri.duration==""){
      Swal.fire("Data-missing");

    }
    else{
    
    this.gymservice.creategymplan(this.gymplanCri).subscribe(result => {
    console.log(result);
    this.gymplanCri = {

      name : " ",
      duration : " "
     
    }
    Swal.fire("done");

    

    this.gymplanCri = {

      name : "",
      duration : ""
     
    }

  
  });
  }
}


close(){
  
  this.gymplanCri = {

    name : " ",
    duration : " "
   
  }
  this.gymplanCri = {

    name : "",
    duration : ""
   
  }
  this.router.navigate(['./dashbord/gymplan-list']);

  }



}
