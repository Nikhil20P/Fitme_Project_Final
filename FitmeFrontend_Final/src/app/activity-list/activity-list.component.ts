import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FitmeserviceService } from '../fitmeservice.service';
import { MatTableDataSource } from '@angular/material/table';
let  ELEMENT_DATA: any=[];
import Swal from 'sweetalert2';
import { ActivityUpdateComponent } from '../activity-update/activity-update.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: string;
  day:string;
  workouts:string

}

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {


  displayedColumns: string[] =  ['id', 'day', 'workouts','Action'];
  dataSource = ELEMENT_DATA;

  constructor(private fitmeserivice  : FitmeserviceService, public dialog: MatDialog,
    private router :Router) { }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData () :void {
    this.fitmeserivice.getActivity().subscribe((result)=>{
      ELEMENT_DATA = result;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      
      console.log("datasource : ",this.dataSource);
    })
  }

  doUpdate(id:any){
    this.fitmeserivice.id=id;
    let dialogRef = this.dialog.open(ActivityUpdateComponent,{
      width:'auto',
      height:'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === "success") {
        this.fetchData();
      }
    });
  }




  doDelete(id:any){
    Swal.fire({
      icon: 'info',
      title: 'Are You Sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fitmeserivice.deleteActivity(id).subscribe((data) => {
          Swal.fire('Success', 'Activity Deleted', 'success')
        },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error')
          }
        );

        this.dataSource.data = this.dataSource.data.filter((ele: any) => {
          return ele.id != id;
        });
      }
    })
  }


  add(){
    this.router.navigate(['./dashbord/activity']);
  
  }

}
