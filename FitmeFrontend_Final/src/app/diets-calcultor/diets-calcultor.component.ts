import { Component, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service'

@Component({
  selector: 'app-diets-calcultor',
  templateUrl: './diets-calcultor.component.html',
  styleUrls: ['./diets-calcultor.component.css']
})
export class DietsCalcultorComponent implements OnInit {

  DIET_DETALS : any = [];
  BMI : number = 0;
  calorie : number = 0;
  weight: number = 0;


  dietCredential ={

    height : 0,
    weight : 0,
    age : 0
  }


  constructor(private fitmeService :FitmeserviceService) { }

  ngOnInit(): void {
  }

  getDietDetailsData(){
    this.fitmeService.getDietDetails(this.calorie).subscribe(result => {
      this.DIET_DETALS = result;
      console.log(this.DIET_DETALS);
    });
  } 

  onCalculate(){
    this.BMI = (this.dietCredential.weight) / ((this.dietCredential.height/3.281) * (this.dietCredential.height/3.281));
    this.weight =(0.5 * this.BMI + 11.5) *((this.dietCredential.height/3.281) * (this.dietCredential.height/3.281));
    this.calorie =66.67 + (13.75 * this.dietCredential.weight) + (5 * this.dietCredential.height) -(6.76 * this.dietCredential.age);
    this.getDietDetailsData();
  }

}
