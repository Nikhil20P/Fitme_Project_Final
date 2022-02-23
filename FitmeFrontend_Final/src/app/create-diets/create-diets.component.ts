import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FitmeserviceService } from '../fitmeservice.service';

@Component({
  selector: 'app-create-diets',
  templateUrl: './create-diets.component.html',
  styleUrls: ['./create-diets.component.css']
})
export class CreateDietsComponent implements OnInit {
  dietCredential = {

    calorie : "",
    diets : "",
   
  }

  constructor(private fitmeService  : FitmeserviceService,
    private router : Router) { }

  ngOnInit(): void {
  }
  
  onCreate(){
    if(this.dietCredential.calorie==""||this.dietCredential.diets==""){
      Swal.fire("data-missing");
    }
    else
    {
    this.fitmeService.createDiet(this.dietCredential).subscribe(result => {
    console.log(result);
    this.dietCredential={
      calorie : " ",
    diets : " ",
    }
    Swal.fire("done");

    this.dietCredential = {

      calorie : "",
      diets : "",
     
    }


  });
  }
  }

close(){
  this.dietCredential = {

    calorie : " ",
    diets : " ",
   
  }
  this.dietCredential = {

    calorie : "",
    diets : "",
   
  }
  this.router.navigate(['./dashbord/diets-list']);

  

}

}
