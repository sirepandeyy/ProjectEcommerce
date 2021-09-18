import {Role} from './role';

export interface User {
  Id: number;
  first_name: string;
  last_name: string;
  email: string;
  password:string
  role: Role[];
}
