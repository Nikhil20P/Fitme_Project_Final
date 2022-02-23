import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreatememberComponent } from './createmember/createmember.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateGymplanComponent } from './create-gymplan/create-gymplan.component';
import {MatSelectModule} from '@angular/material/select';
import { CreateDietsComponent } from './create-diets/create-diets.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon'; 
import { MemberlistComponent } from './memberlist/memberlist.component';
import {MatTableModule} from '@angular/material/table';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { GymplanListComponent } from './gymplan-list/gymplan-list.component';
import { GymplanUpdateComponent } from './gymplan-update/gymplan-update.component';
import { DietsCalcultorComponent } from './diets-calcultor/diets-calcultor.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { DietsListComponent } from './diets-list/diets-list.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { DietsUpdateComponent } from './diets-update/diets-update.component';
import { ActivityUpdateComponent } from './activity-update/activity-update.component';













@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreatememberComponent,
    CreateGymplanComponent,
    CreateDietsComponent,
    MemberlistComponent,
    AdminDashbordComponent,
    MemberUpdateComponent,
    GymplanListComponent,
    GymplanUpdateComponent,
    DietsCalcultorComponent,
    CreateActivityComponent,
    DietsListComponent,
    ActivityListComponent,
    DietsUpdateComponent,
    ActivityUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    CdkTableModule,
    MatIconModule,
    MatTableModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
    


    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
