import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './home/form/form.component';
import { FormBuilderComponent } from './home/form/form-builder/form-builder.component';
import { AssessorComponent } from './home/organisation/assessor/assessor.component';
import { UserComponent } from './home/organisation/user/user.component';
import { ProjectComponent } from './home/project/project.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { OrganisationComponent } from './home/organisation/organisation.component';
import { ResponseComponent } from './home/response/response.component';
import { ResponseTableComponent } from './home/response/response-table/response-table.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'forms', component:  FormComponent},
  { path: 'formBuilder', component:  FormBuilderComponent},
  { path: 'dash', component:  DashboardComponent, children: [
    { path: '', component: OrganisationComponent},
    { path: 'form', component: FormComponent},
    { path: 'formBuilder', component:  FormBuilderComponent},
    { path: 'response', component: ResponseComponent},
    { path: 'org', component: OrganisationComponent},
    { path: 'resTable', component: ResponseTableComponent},
    { path: 'proj', component: ProjectComponent},
  ]}
];
