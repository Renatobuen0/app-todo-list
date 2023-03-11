import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Home page
import { HomeComponent } from './module/home/pages/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
