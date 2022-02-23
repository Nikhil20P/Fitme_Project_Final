import { Component, Inject, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {

  ELEMENT_DATA : any=[];
  ELEMENT_DATA_TRAINER : any=[];
  data:any;

  constructor(private fitmeService : FitmeserviceService,
    public dailogRef:MatDialogRef<MemberUpdateComponent>,
    private router :Router,@Inject(MAT_DIALOG_DATA) public data1:any) { }

    memberCredential:any = {

      status: "",
      name : "",
      email : "",
      mobileNumber : "",
      address : "",
      gender :"",
      height : "",
      weight :"",
      age : "",
      gymplan:"",
      joiningDate : ""
    };


  ngOnInit(): void {
    this.fitmeService.getMemberById(this.fitmeService.memberId).subscribe(data1=>
      {
        console.log(data1);
        this.memberCredential=data1;
      });


      this.getPlan();
  }
flag:any
  
  onCreate(memberId:any){

    this.flag=true

    if(this.memberCredential.name=="" || this.memberCredential.address=="" || this.memberCredential.age=="" || this.memberCredential.email=="" || this.memberCredential.gymplan=="" || this.memberCredential.gender=="" || this.memberCredential.height=="" || this.memberCredential.joiningDate=="" || this.memberCredential.mobileNumber=="" || this.memberCredential.status=="" || this.memberCredential.weight=="")
{
 Swal.fire("data are missing");
 this.flag=false;

}
else if(this.memberCredential.name.match("^(?=.*?[#?!@$%^&*-])") ||this.memberCredential.name.match("^(?=.*?[0-9])") )
{
 Swal.fire("Name data are wrong");
 this.flag=false;
}
else if(! this.memberCredential.email.match("^(?=.*?[@])(?=.*?[a-z])(?=.*?[.])"))
{
 Swal.fire("Gmail data are wrong");
 this.flag=false;
}
// else if( ! this.memberCredential.mobileNumber.match("(0|91)?[7-9][0-9]{9}"))
// {
//  Swal.fire("Contact data are wrong");
//  this.flag=false;
// }
// else if( this.memberCredential.height.match("[a-zA-Z]") || this.memberCredential.height.match("^(?=.*?[#?!@$%^&*-])" ||  ! this.memberCredential.height.match("^(?=.*?[0-9])"))) 
// {
//  Swal.fire("Height data are wrong");
//  this.flag=false;
// }
// else if( this.memberCredential.weight.match("[a-zA-Z]") || this.memberCredential.weight.match("^(?=.*?[#?!@$%^&*-])" ||  ! this.memberCredential.weight.match("^(?=.*?[0-9])"))) 
// {
//  Swal.fire("Weight data are wrong");
//  this.flag=false;
// }
else
{
    this.fitmeService.updatemember(this.memberCredential).subscribe(result => {
    console.log(result);
    this.memberCredential = {

      status: "",
      name : " ",
      email : " ",
      mobileNumber : " ",
      address : " ",
      gender :" ",
      height : " ",
      weight :" ",
      age : " ",
      gymplan:"",

      joiningDate : " "
    };
    this.dailogRef.close("success");
  });
}
  }

close(){
  this.dailogRef.close(true);
}
  


getPlan(){
  this.fitmeService.getGymplan().subscribe(result => {
    this.ELEMENT_DATA = result;
    console.log(this.ELEMENT_DATA);
  });
} 
  

}
