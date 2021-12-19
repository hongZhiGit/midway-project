import { Provide } from '@midwayjs/decorator';

@Provide()
export class UserService {

  private UserArr = [{
    id: '1',
    username: 'mockedName',
    phone: '12345678901',
    email: 'xxx.xxx@xxx.com',
  },{
    id: '2',
    username: 'mockedName',
    phone: '12345678901',
    email: 'xxx.xxx@xxx.com',
  },{
    id: '3',
    username: 'mockedName',
    phone: '12345678901',
    email: 'xxx.xxx@xxx.com',
  }];

  async insert(params: any): Promise<any> {
    return 
  }

  async getList(options: any): Promise<any> {
    return this.UserArr;
  }

  async getById(id: string): Promise<any> {
    return this.UserArr.filter(p => p.id === id);
  }
}
