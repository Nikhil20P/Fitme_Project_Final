import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { Router } from '@angular/router';
import {FitmeserviceService} from '../fitmeservice.service'
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { GymplanUpdateComponent } from '../gymplan-update/gymplan-update.component';
let ELEMENT_DATA: any = [];



@Component({
  selector: 'app-gymplan-list',
  templateUrl: './gymplan-list.component.html',
  styleUrls: ['./gymplan-list.component.css']
})
export class GymplanListComponent implements OnInit {

  constructor(private fitmeSerivice: FitmeserviceService, private router: Router, public dialog: MatDialog) { }
  displayedColumns: string[] = ['gymPlanId', 'name', 'duration', 'Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit(): void {
    this.fetchData();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  fetchData() {
    this.fitmeSerivice.getGymplan().subscribe((result) => {
      ELEMENT_DATA = result;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    })
  }
  
  doDelete(gymPlanId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are You Sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fitmeSerivice.deleteGymplan(gymPlanId).subscribe((data) => {
          Swal.fire('Success', 'Gymplan Deleted', 'success')

        },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error')
          }
        );

        this.dataSource.data = this.dataSource.data.filter((ele: any) => {
          return ele.gymPlanId != gymPlanId;
        });
        // window.location.reload();
      }
    })
    // window.location.reload();
  
  }

  doUpdate(id:any){
    this.fitmeSerivice.gymPlanId=id;
    let dialogRef = this.dialog.open(GymplanUpdateComponent,{
      width:'auto',
      height:'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === "success") {
        this.fetchData();
      }
    });
  }




add(){
  this.router.navigate(['./dashbord/gymplan']);

}


}
