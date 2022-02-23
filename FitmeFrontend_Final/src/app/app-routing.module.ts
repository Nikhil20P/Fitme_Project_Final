import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AdminComponent } from './admin/admin.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { CreateDietsComponent } from './create-diets/create-diets.component';
import { CreateGymplanComponent } from './create-gymplan/create-gymplan.component';
import { CreatememberComponent } from './createmember/createmember.component';
import { DietsCalcultorComponent } from './diets-calcultor/diets-calcultor.component';
import { DietsListComponent } from './diets-list/diets-list.component';
import { GymplanListComponent } from './gymplan-list/gymplan-list.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberlistComponent } from './memberlist/memberlist.component';

const routes: Routes = [
  {path:'adminLogin', component:AdminComponent},
    
  // {path:"gymplan", component:CreateGymplanComponent},
  // {path:"diets", component:CreateDietsComponent},
  // {path:"memberlist", component:MemberlistComponent},
  
  {path:"dashbord", component:AdminDashbordComponent,
     children:[
     {path:'amit', component:CreatememberComponent},
     {path:"gymplan", component:CreateGymplanComponent},
     {path:"diets", component:CreateDietsComponent},
     {path:"memberlist", component:MemberlistComponent},
     {path:"gymplan-list",component:GymplanListComponent},
     {path:"diets-calcule",component:DietsCalcultorComponent},
     {path:"activity",component:CreateActivityComponent},
     {path:"diets-list",component:DietsListComponent},
     {path:"activity-list",component:ActivityListComponent}
        ]}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
