export class User {
  public username: string
  public password: string

  public isValidPassword?: (password: string) => Promise<boolean>
}
