import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsattiviComponent } from './pages/postsattivi/postsattivi.component';
import { PostsnonattiviComponent } from './pages/postsnonattivi/postsnonattivi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: PostsattiviComponent},
  { path: 'inactive-posts', component: PostsnonattiviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
