

export class Page{
  public PageSize:number;
  public PageNumber:number;
  public TotalRecords:number;
  public CurrentPage:number;

  // constructor(pageSize:number,pageNumber:number,totalRecords:number,currentPage:number){
  //     this.PageSize = pageSize;
  //     this.PageNumber = pageNumber;
  //     this.TotalRecords = totalRecords;
  //     this.CurrentPage = currentPage;
  // }

  constructor(){
      this.PageSize = 0;
      this.PageNumber = 0;
      this.TotalRecords = 0;
      this.CurrentPage = 0;
  }
}
// export class Page{
//   public PageSize:number;
//   public PageNumber:number;
//   public TotalRecords:number;
//   public CurrentPage:number;

//   constructor(pageSize:number,pageNumber:number,totalRecords:number,currentPage:number){
//       this.PageSize = pageSize;
//       this.PageNumber = pageNumber;
//       this.TotalRecords = totalRecords;
//       this.CurrentPage = currentPage;
//   }
// }