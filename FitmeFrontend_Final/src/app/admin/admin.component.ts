import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FitmeserviceService} from '../fitmeservice.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  hide = true;

  adminCredential = {
    adminName:"",
    adminPassword:""
  };

  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private fitmeservice:FitmeserviceService
  ) { }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.adminCredential.adminName + " login"  +this.adminCredential.adminPassword);
    this.fitmeservice.adminLogin(this.adminCredential).subscribe(result => {
      localStorage.setItem("adminName",this.adminCredential.adminName);
      localStorage.setItem("adminPassword",this.adminCredential.adminPassword);
      console.log(result);
      this.router.navigate(["/dashbord"]);
    })
  }

}
