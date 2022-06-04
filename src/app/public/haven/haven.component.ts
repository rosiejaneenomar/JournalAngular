import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-haven',
  templateUrl: './haven.component.html',
  styleUrls: ['./haven.component.scss']
})
export class HavenComponent implements OnInit {
  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
