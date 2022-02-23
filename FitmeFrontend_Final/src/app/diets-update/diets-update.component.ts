import { Component, OnInit,Inject } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diets-update',
  templateUrl: './diets-update.component.html',
  styleUrls: ['./diets-update.component.css']
})
export class DietsUpdateComponent implements OnInit {
  ELEMENT_DATA : any=[];
  data:any;

  constructor(private fitmeService : FitmeserviceService,
    public dailogRef:MatDialogRef<DietsUpdateComponent>,
    private router :Router,@Inject(MAT_DIALOG_DATA) public data1:any) { }
    dietCredential:any = {

      calorie : "",
      diets : "",
     
    };

  ngOnInit(): void {
    this.fitmeService.getDietPlanById(this.fitmeService.dietId).subscribe(data1=>
      {
        console.log(data1);
        this.dietCredential=data1;
      });
  }

  close(){
    this.dailogRef.close(true);
  }

  onCreate(dietId:any){



    if(this.dietCredential.calorie==""||this.dietCredential.diets==""){
      Swal.fire("data-missing");
    }
    else
    {
    this.fitmeService.updatDiets(this.dietCredential).subscribe(result => {
    console.log(result);
    this.dietCredential = {
      calorie : " ",
      diets : " ",
    }
    this.dailogRef.close("success");
  });
  }
}
  

}
