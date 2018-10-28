import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  { path: 'animales', component: AnimalsComponent },
  { path: 'animal/:name', component: AnimalDetailComponent },
  { path: '', redirectTo: '/animales', pathMatch: 'full'},
  { path: '**', redirectTo: '/animales', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
