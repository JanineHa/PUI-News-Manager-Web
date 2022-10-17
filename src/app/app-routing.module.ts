import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'detailPage/:id', component: DetailPageComponent },
  { path: 'editPage/:id', component: EditPageComponent },
  { path: 'createPage', component: CreatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
