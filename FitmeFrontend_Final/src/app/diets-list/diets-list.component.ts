import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {FitmeserviceService} from '../fitmeservice.service';
let  ELEMENT_DATA: any=[];
import Swal from 'sweetalert2';
import { DietsUpdateComponent } from '../diets-update/diets-update.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diets-list',
  templateUrl: './diets-list.component.html',
  styleUrls: ['./diets-list.component.css']
})
export class DietsListComponent implements OnInit {
  displayedColumns: string[] = ['dietId', 'calorie', 'diets','Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor(private fitmeService  : FitmeserviceService, public dialog: MatDialog,
    private router : Router) { }

  ngOnInit(): void {
    this.fetchData();

  }
  fetchData() {
    this.fitmeService.getDiet().subscribe((result)=>{
      ELEMENT_DATA = result;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    })
  }

  doDelete(daitID:any){
    Swal.fire({
      icon: 'info',
      title: 'Are You Sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fitmeService.deleteDait(daitID).subscribe((data) => {
          Swal.fire('Success', 'Diets Delete', 'success')
        },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error')
          }
        );

        this.dataSource.data = this.dataSource.data.filter((ele: any) => {
          return ele.dietId != daitID;
        });
        // window.location.reload();
      }
    })
  }

  doUpdate(id:any){
    this.fitmeService.dietId=id;
    let dialogRef = this.dialog.open(DietsUpdateComponent,{
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
  this.router.navigate(['./dashbord/diets']);

}



}
