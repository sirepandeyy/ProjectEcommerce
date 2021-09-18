import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {RoleService} from '../../../services/role.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../../interfaces/role';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
  form: FormGroup;
  roles:Role[]
  id: number;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }
  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
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
      name: '',
    });

    

    this.id = this.route.snapshot.params.id;

    this.roleService.get(this.id).subscribe(
      role => {
        this.form.patchValue({
          ModifiedBy: 1,
          CreatedBy : 1,
          CreationDate: new Date,
          ModifiedDate : new Date,
           RowVersion : 1,
            name:role.name
        });
      }
    );
  }

  

  submit(): void {
    this.DataCollection = []
    this.DataCollection.push(this.form.getRawValue())
    this.str.DataCollection = this.DataCollection
    this.str.DataCollection[0].Id = this.id
    this.roleService.update(this.id, this.str)
      .subscribe(() => this.router.navigate(['/roles']));
    };

  
  }

