import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: BookFormComponent },
  { path: 'search', component: SearchComponent },
  { path: ':isbn', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
