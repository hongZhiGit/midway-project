import { Rule, RuleType } from '@midwayjs/decorator';

class VUserOptions {
  @Rule(RuleType.string().required())
  id: string;

  @Rule(RuleType.string().required())
  firstName: string;

  @Rule(RuleType.string().max(10))
  lastName: string;

  @Rule(RuleType.number().max(60))
  age: number;
}

export class VInsertIn extends VUserOptions {
  
}
export class VGetListIn extends VUserOptions {

}
export class VGetListOut {
  @Rule(RuleType.array())
  data: Array<VUserOptions>;
}
export class VGetByIdOut extends VUserOptions {
}