import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Role} from '../../../interfaces/role';
import {RoleService} from '../../../services/role.service';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  form: FormGroup;
  roles: Role[] = [];
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
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
      role_id: ''
    });

    this.roleService.all().subscribe(
      (res: any) => {
        this.roles = res.DataCollection;
        console.log(res.DataCollection)
      }
    );

    this.id = this.route.snapshot.params.id;

    this.userService.get(this.id).subscribe(
      user => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          role_id: user.role.id
        });
      }
    );
  }

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.str.DataCollection[0].Id = this.id
    this.userService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/users']));
  }

}
