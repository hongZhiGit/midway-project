export interface IUserOptions {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

export interface IGetListIn extends IUserOptions {

}

export interface IGetListOut {
  data: Array<IUserOptions>;
}