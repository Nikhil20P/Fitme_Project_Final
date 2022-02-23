import { Component, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createmember',
  templateUrl: './createmember.component.html',
  styleUrls: ['./createmember.component.css']
})
export class CreatememberComponent implements OnInit {

  

  ELEMENT_DATA : any=[];
  ELEMENT_DATA_TRAINER : any=[];
  


  memberCredential = {

    status: "",
    name : "",
    email : "",
    mobileNumber : "",
    address : "",
    gender :"",
    height : "",
    weight :"",
    age : "",
    gymplan: "",
    joiningDate : ""
  };
  




  



  constructor(private fitmeservice : FitmeserviceService,
    private router : Router) { }

  ngOnInit(): void {
    this.getPlan();

    
  }
  

  flag:any


  onCreate(){
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
else if( ! this.memberCredential.mobileNumber.match("(0|91)?[7-9][0-9]{9}"))
{
  Swal.fire("Contact data are wrong");
  this.flag=false;
}
else if( this.memberCredential.height.match("[a-zA-Z]") || this.memberCredential.height.match("^(?=.*?[#?!@$%^&*-])" ||  ! this.memberCredential.height.match("^(?=.*?[0-9])"))) 
{
  Swal.fire("Height data are wrong");
  this.flag=false;
}
else if( this.memberCredential.weight.match("[a-zA-Z]") || this.memberCredential.weight.match("^(?=.*?[#?!@$%^&*-])" ||  ! this.memberCredential.weight.match("^(?=.*?[0-9])"))) 
{
  Swal.fire("Weight data are wrong");
  this.flag=false;
}

else
{
    this.fitmeservice.createMember(this.memberCredential).subscribe(result => {
    console.log(result);
    this.memberCredential = {

      status: " ",
      name : " ",
      email : " ",
      mobileNumber : " ",
      address : " ",
      gender :" ",
      height : " ",
      weight :" ",
      age : " ",
      gymplan: " ",
      joiningDate : " "
    };
    Swal.fire("Success!!");
    this.memberCredential = {

      status: "",
      name : "",
      email : "",
      mobileNumber : "",
      address : "",
      gender :"",
      height : "",
      weight :"",
      age : "",
      gymplan: "",
      joiningDate : ""
    };
    
        
  });
}



}

close(){
  this.memberCredential = {

    status: " ",
    name : " ",
    email : " ",
    mobileNumber : " ",
    address : " ",
    gender :" ",
    height : " ",
    weight :" ",
    age : " ",
    gymplan: " ",
    joiningDate : " "
  };
  
//////
this.memberCredential = {

  status: "",
  name : "",
  email : "",
  mobileNumber : "",
  address : "",
  gender :"",
  height : "",
  weight :"",
  age : "",
  gymplan: "",
  joiningDate : ""
};

this.router.navigate(['./dashbord/memberlist']);


 

}


getPlan(){
  this.fitmeservice.getGymplan().subscribe(result => {
    this.ELEMENT_DATA = result;
    console.log(this.ELEMENT_DATA);
  });
} 





}
