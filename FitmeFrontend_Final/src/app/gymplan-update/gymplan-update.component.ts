import { Component, Inject, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gymplan-update',
  templateUrl: './gymplan-update.component.html',
  styleUrls: ['./gymplan-update.component.css']
})
export class GymplanUpdateComponent implements OnInit {

  ELEMENT_DATA : any=[];
  data:any;

  constructor(private fitmeService : FitmeserviceService,
    public dailogRef:MatDialogRef<GymplanUpdateComponent>,
    private router :Router,@Inject(MAT_DIALOG_DATA) public data1:any) { }


    gymplanCredential:any = {

      name : "",
      duration : ""
     
    };

  ngOnInit(): void {
    this.fitmeService.getGymplanById(this.fitmeService.gymPlanId).subscribe(data1=>
      {
        console.log(data1);
        this.gymplanCredential=data1;
      });
  }


  close(){
    this.dailogRef.close(true);
  }


  onCreate(MembershipId:any){


    if(this.gymplanCredential.name=="" || this.gymplanCredential.duration==""){
      Swal.fire("Data-missing");

    }
    else{
    this.fitmeService.updatGymplan(this.gymplanCredential).subscribe(result => {
    console.log(result);
    this.gymplanCredential = {
      name : " ",
      duration : " "
    }
    this.dailogRef.close("success");
  });
  }
}

}
