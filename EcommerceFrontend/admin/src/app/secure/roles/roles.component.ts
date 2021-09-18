import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Role} from '../../interfaces/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  
  constructor(private roleService: RoleService,private router:Router) {
  }

  ngOnInit(): void {
    this.roleService.all().subscribe(
      (res: any) => {
        this.roles = res.DataCollection;
        console.log(res)
      }
    );
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {

      this.roleService.get(id).subscribe(
        (res: any) => {
          this.str.DataCollection = res.DataCollection
          this.str.DataCollection[0].Id = id
        }
      );

      setTimeout(()=>{
        this.roleService.delete(id,this.str).subscribe(
          () => this.router.navigate(['/roles'])
        );
      },500)
     
    }
  }

}
