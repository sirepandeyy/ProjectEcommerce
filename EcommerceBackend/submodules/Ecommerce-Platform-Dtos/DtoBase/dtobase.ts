export class DtoBase {
  constructor() {
    this.RowVersion = 0
    this.CreationDate = new Date()
    this.ModifiedDate = new Date()
  }

  Id: number
  CreationDate: Date
  ModifiedDate: Date
  CreatedBy: number
  ModifiedBy: number
  RowVersion: number
  
 
}
