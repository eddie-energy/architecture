export interface Issue {
  url: string
  title: string
  user: User
  labels: string[]
  state: string
  availableSince: Date
  closedOn?: Date
}

export interface User {
  name: string
  url: string
}