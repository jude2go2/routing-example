import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: 'second-child',
        component: SecondChildComponent,
      },
    ],
  },
  {
    path: 'first/:id',
    component: FirstChildComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
