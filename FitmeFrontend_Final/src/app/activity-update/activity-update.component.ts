import { Component, Inject, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.css']
})
export class ActivityUpdateComponent implements OnInit {

  ELEMENT_DATA : any=[];
  data:any;

  constructor(private fitmeService : FitmeserviceService,
    public dailogRef:MatDialogRef<ActivityUpdateComponent>,
    private router :Router,@Inject(MAT_DIALOG_DATA) public data1:any) { }
    
    
    activityCredential:any={
      day: "",
      workouts:""
  
    }

  ngOnInit(): void {
    this.fitmeService.getActivityById(this.fitmeService.id).subscribe(data1=>
      {
        console.log(data1);
        this.activityCredential=data1;
      });
  
    }

    close(){
      this.dailogRef.close(true);
    }


    flag:any

    onCreate(id:any){
       
      this.flag=true
      if(this.activityCredential.day=="" || this.activityCredential.workouts==""){
        Swal.fire("data missing");
        this.flag=false;
      }
      
      
      else if(this.activityCredential.day==""   ||    this.activityCredential.day.match("^(?=.*?[#?!@$%^&*-])")  ||  this.activityCredential.day.match("^(?=.*?[0-9])")){

        Swal.fire("Days data are wrong");
        this.flag=false;
      }
      else if(this.activityCredential.workouts==""||  this.activityCredential.workouts.match("^(?=.*?[#?!@$%^&*-])")|| this.activityCredential.workouts.match("^(?=.*?[0-9])")){
        Swal.fire("Workout data are wrong");
        this.flag=false;
      }
      if(this.flag==true){
      
      this.fitmeService.updatActivity(this.activityCredential).subscribe(result => {
      console.log(result);
      this.activityCredential = {
        day : " ",
        workouts : " ",
      }
      this.dailogRef.close("success");
    });
    }
    }

  

}
