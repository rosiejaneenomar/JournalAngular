import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-list-posts-page',
  templateUrl: './list-posts-page.component.html',
  styleUrls: ['./list-posts-page.component.scss']
})
export class ListPostsPageComponent implements OnInit {


  listOfData: Post[] = [
    {
      id: 1,
      user_id: 1,
      title: 'This is my life',
      date: new Date()
    },
    {
      id: 2,
      user_id: 2,
      title: 'What Should I Do?',
      date: new Date()
    },
    {
      id: 3,
      user_id: 3,
      title: 'Back-end vs. Front-end Developer',
      date: new Date()
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
