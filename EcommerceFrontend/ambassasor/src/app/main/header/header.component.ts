import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Welcome';
  description = 'Share links to earn money';
  user = null;

  constructor() {
  }

  ngOnInit(): void {
  }
}
