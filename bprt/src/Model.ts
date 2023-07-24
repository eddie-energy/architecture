export interface Issue {
  url: string
  title: string
  user: User
  labels: string[]
  state: string
  availableSince: Date
  closedOn?: Date
  description: string
}

export interface IssueForCreation {
  title: string
  labels: string[]
  status: string
  description: string
  workaround: string
  sustainableSolution: string
  projectedFor: string
  availableSince: string
  owner: string
}

export interface User {
  name: string
  url: string
}