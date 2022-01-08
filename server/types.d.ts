namespace Express {
  export interface User extends Express.User {
    id: number,
    fullName: string,
    email: string,
    password: string,
  }
  export interface Request extends Express.Request {
    user: User,
  }
}
