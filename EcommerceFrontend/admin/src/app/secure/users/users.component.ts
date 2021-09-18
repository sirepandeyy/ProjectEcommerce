import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = []
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.userService.all().subscribe(
      (res: any) => {
        this.users = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.userService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.userService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/users'])
        );
      },500)
     
    }
  }
}
