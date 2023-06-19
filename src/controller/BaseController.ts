import jwt, { JwtPayload } from 'jsonwebtoken'
export default class BaseController {
  static verifyToken(token: string) {
    const result = jwt.verify(token, '114514') as JwtPayload
    return result?.data
  }
}
export const { verifyToken } = BaseController