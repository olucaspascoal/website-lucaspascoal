import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErroComponent } from './erro/erro.component';

const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: '404', component: ErroComponent }, 
  { path: '**',  redirectTo: '/404', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
