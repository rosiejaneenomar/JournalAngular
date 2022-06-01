import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ListPostsPageComponent } from './pages/list-posts-page/list-posts-page.component';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    ListPostsPageComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NzTableModule,
    NzDividerModule
  ],
  providers: [PostService]
})
export class PostsModule { }
