export class Book {
  public readonly id?: string

  public title: string
  public description: string
  public author: string
  public price: string
  public rent?: boolean
  // public readonly sentMessages?: Message[]
  // public readonly recievedMessages?: Message[]

  constructor(props: Omit<Book, 'id'>) {
    Object.assign(this, props)
  }
}
