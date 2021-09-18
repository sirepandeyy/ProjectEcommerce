import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {RoleService} from '../../../services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
  form: FormGroup;

  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
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
      name: '',
    });

  }

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.roleService.create(this.str).subscribe(
      () => this.router.navigate(['/roles'])
    );
  }

}
