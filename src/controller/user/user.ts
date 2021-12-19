import { Inject, Controller, Post, Provide, Body, Get, Param, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../../service/user/user';
import { VGetByIdOut, VGetListIn, VGetListOut, VInsertIn } from '../../vo/user/user';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/')
  async insert(@Body() inVo: VInsertIn): Promise<any> {
    const data = await this.userService.insert(inVo);
    return { success: true, message: 'OK', data };
  }

  @Get('/list')
  async getList(@Param() inVo: VGetListIn): Promise<VGetListOut> {
    return this.userService.getList(inVo);
  }

  @Get('/')
  async getById(@Query() id: string): Promise<VGetByIdOut> {
    return this.userService.getById(id);
  }
}
