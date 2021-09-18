import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../classes/auth';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  user: User;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

}
}
