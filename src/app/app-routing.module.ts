import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resources/resources.component';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyResolver implements Resolve<Observable<string>> {
  resolve(): Observable<string> {
    performance.mark('resolved-data-start');
    return of('Resolved Data').pipe(delay(500));
  }
}

const routes: Routes = [
  {
    path: '', component: DashboardComponent, pathMatch: "full",
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'resources', component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
