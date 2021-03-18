import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonTableComponent } from './components/person-table/person-table.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonsChartComponent } from './components/persons-chart/persons-chart.component';
import { PersonUpdateFormComponent } from './components/person-update-form/person-update-form.component';
import { MainComponent } from './components/main/main.component'

const routes: Routes = [
  {
    path: '',
    //redirectTo: '/people',
    //pathMatch: 'full'
    component: MainComponent
  },
  {
    path: 'people',
    component: PersonTableComponent
  },
  {
    path: 'people/add',
    component: PersonFormComponent
  },
  {
    path: 'people/chart',
    component: PersonsChartComponent
  },
  {
    path: 'people/update',
    component: PersonUpdateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
