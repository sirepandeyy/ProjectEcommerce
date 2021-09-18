import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RoleService} from '../../../services/role.service';
import {Role} from '../../../interfaces/role';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  form: FormGroup;
  roles: Role[]=[];
  DataCollection:any = []


  str:any = {
    "DataCollection" : {}
  }
  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ModifiedBy: 1,
      CreatedBy : 1,
      CreationDate: new Date,
      ModifiedDate : new Date,
       RowVersion : 1,
      first_name: '',
      last_name: '',
      email: '',
      password:'',
      role_id: ''
    });

    this.roleService.all().subscribe(
      (res: any) => {
        this.roles = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    console.log(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.userService.create(this.str).subscribe(
      () => this.router.navigate(['/users'])
    );
  }

}
