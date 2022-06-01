import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsPageComponent } from './pages/list-posts-page/list-posts-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListPostsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
