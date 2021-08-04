import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULOS
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';

//COMPONENTES
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
