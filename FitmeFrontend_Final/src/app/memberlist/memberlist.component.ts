import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FitmeserviceService } from '../fitmeservice.service';
import { MatTableDataSource } from '@angular/material/table';
let  ELEMENT_DATA: any=[];
import Swal from 'sweetalert2';
import { MemberUpdateComponent } from '../member-update/member-update.component';
import { Router } from '@angular/router';


export interface PeriodicElement {
  memberId: string;
  status:string;
  name:string
  email:string
  mobileNumber:number
  address:string
  gender:string
  height:number
  weight:number
  age:number
  gymplan:String
  joiningDate:Date




 
}
  



@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  memberFilterCredential = {

    minAge : 0,
    maxAge : 0
  }
  
  
  displayedColumns: string[] =  ['memberId', 'status', 'name', 'email', 'mobileNumber','address', 'gender', 'height', 'weight', 'age','gymplan','joiningDate','Action'];
  dataSource = ELEMENT_DATA;
  constructor(private fitmeserivice  : FitmeserviceService, public dialog: MatDialog,
    private router : Router){}
 

  ngOnInit(): void {
    this.fetchData();
     // window.location.reload();
  }
  fetchData () :void {
    this.fitmeserivice.getMember().subscribe((result)=>{
      ELEMENT_DATA = result;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      
      console.log("datasource : ",this.dataSource);
    })
  }


  doDelete(id:any){
    Swal.fire({
      icon: 'info',
      title: 'Are You Sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fitmeserivice.deleteMember(id).subscribe((data) => {
          Swal.fire('Success', 'Member Deleted', 'success')
        },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error')
          }
        );

        this.dataSource.data = this.dataSource.data.filter((ele: any) => {
          return ele.memberId != id;
        });
      }
    })
  }


  onAgeFilter(){
    this.fitmeserivice.getAgeFilter(this.memberFilterCredential.minAge,this.memberFilterCredential.maxAge).subscribe((result)=>{
     ELEMENT_DATA = result;
     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
     console.log("datasource : ",this.dataSource);
   })
  }



  doUpdate(id:any){
    this.fitmeserivice.memberId=id;
    let dialogRef = this.dialog.open(MemberUpdateComponent,{
      width:'auto',
      height:'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === "success") {
        this.fetchData();
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



addmember(){
  this.router.navigate(['./dashbord/amit']);
}


}
