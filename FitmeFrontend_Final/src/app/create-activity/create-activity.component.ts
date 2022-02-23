import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FitmeserviceService } from '../fitmeservice.service';


@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  activityCredential={
    day: "",
    workouts:""

  }

  constructor(private fitmeService  : FitmeserviceService,
    private router : Router) { }

  ngOnInit(): void {
  }


  flag:any
onCreate(){
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



    this.fitmeService.createActivity(this.activityCredential).subscribe(result => {
    console.log(result);
    this.activityCredential={
      day: " ",
      workouts:" "

  
    }
    Swal.fire("done");


    this.activityCredential={
      day: "",
      workouts:""
    };


  });
  }
}



close(){
  this. activityCredential={
    day: " ",
    workouts:" "

  }
  this. activityCredential={
    day: "",
    workouts:""

  }

  this.router.navigate(['./dashbord/activity-list']);

} 

}
