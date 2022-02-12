namespace Express {
  import {Request as ExpressRequest} from 'express'

  export interface User {
    id: number,
    email: string,
    password: string,
  }
  export interface Request extends ExpressRequest {
    user: User,
  }
}
