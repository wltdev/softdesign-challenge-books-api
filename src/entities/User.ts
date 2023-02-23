export class User {
  public readonly _id?: any
  public username: string
  public password: string

  public isValidPassword?: (password: string) => Promise<boolean>
}
