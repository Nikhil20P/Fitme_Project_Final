import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FitmeserviceService {
  id: any;
   memberId:any;
  gymPlanId:any;
  dietId:any;

  adminCredential = {
    adminName:"",
    adminPassword:""
  };
  private url = 'http://localhost:8080/';

  constructor( private httpService:HttpClient) { }
//login Api
  public adminLogin(adminCredential:any){
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(adminCredential.adminName+":"+adminCredential.adminPassword)})
   const url: any =`${this.url}`;
   return this.httpService.get(url,{headers,responseType:'text'});
 }

//create gymplan Api
 creategymplan(payload: any): Observable<any> {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}savegymplan`;
  return this.httpService.post(url, payload,{headers});
}

//view member Api
getMember() {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}members`;
  return this.httpService.get(url,{headers});
}

//delete member Api
deleteMember(memberId: any) {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}memberDelete/${memberId}`;
  return this.httpService.delete(url,{headers});
}
//create member api
createMember(payload: any): Observable<any> { 
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}members`;
  return this.httpService.post(url, payload,{headers});
}
//  this api work on age 
getAgeFilter(minAge:any,maxAge:any){
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url : any = `${this.url}member/age/${minAge}/${maxAge}`;
  return this.httpService.get(url,{headers})
}

// this api select member with id
getMemberById(memberId:any) {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}member/id/${memberId}`;
  return this.httpService.get(url,{headers});
}
//this api for update
updatemember(payload: any): Observable<any> {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}member`;
  return this.httpService.post(url, payload,{headers});
}

//this api show gymplan
getGymplan() {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}getplans`;
  return this.httpService.get(url,{headers});
}

//this api delete gymplan
deleteGymplan(gymPlanId: any) {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  console.log('In FitmeserviceService');
  const url: any = `${this.url}gymplan/${gymPlanId}`;
  return this.httpService.delete(url,{headers});
}

//this api is view fymplan by id
getGymplanById(gymPlanId: any) {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}getplan/${gymPlanId}`;
  return this.httpService.get(url,{headers});
}

// this api is gymplan update
updatGymplan(payload: any): Observable<any> {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}gymplanupdate`;
  return this.httpService.post(url, payload,{headers});
}

//
getDietDetails(calorie:any){
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}diet/calorie/${calorie}`;
  return this.httpService.get(url,{headers});
}

// this api is Add diet
createDiet(payload: any): Observable<any>{
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any =`${this.url}diets`;
  return this.httpService.post(url,payload,{headers});
}
//this Api view All diet list
getDiet(){
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}diets`;
  return this.httpService.get(url,{headers});
}

// this Api is delete diet
deleteDait(DaitId: any) {
  console.log('In GymServiceService trainerDelete');
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}deleteDiet/${DaitId}`;
  return this.httpService.delete(url,{headers});
}


//this api is view diet by id
getDietPlanById(dietId: any) {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}diet/id/${dietId}`;
  return this.httpService.get(url,{headers});
}

//this api is update diet
updatDiets(payload: any): Observable<any> {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}diet`;
  return this.httpService.post(url, payload,{headers});
}


//this api is add Activity
createActivity(payload: any): Observable<any>{
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any =`${this.url}Activitysave`;
  return this.httpService.post(url,payload,{headers});
}



//this api is view all Activity

getActivity() {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}Activity`;
  return this.httpService.get(url,{headers});
}



updatActivity(payload: any): Observable<any> {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}Activityupdate`;
  return this.httpService.post(url, payload,{headers});
}


getActivityById(id: any) {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}Activity/${id}`;
  return this.httpService.get(url,{headers});
}




deleteActivity(id: any) {
  const headers=new HttpHeaders({Authorization: 'Basic '+btoa(localStorage.getItem("adminName")+":"+localStorage.getItem("adminPassword"))})
  const url: any = `${this.url}Activitydelete/${id}`;
  return this.httpService.delete(url,{headers});
}

}
