import { Context } from "koa"
import { post } from '../decorator/reqmethoddecorator'
import { fail, success } from "../common/resResult"
import { Controller } from "../decorator/controllerdecorator"
import userService from "../modules/userinfo/service/UserService"
@Controller('/usermodule')
class UserController {
  @post('/login')
  async findSecThrdCtgys(ctx: Context) {
    const { username, psw } = ctx.request.body
    const result = await userService.findOneUser(username, psw)
    if (result) {
      ctx.body = success(result)
    } else {
      ctx.body = fail('用户名或密码不正确, 请检查后重新登录')
    }
  }
}